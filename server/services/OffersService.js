const { SellType, OfferType } = require("@prisma/client");
const APIError = require("../errors/APIError");
const { addDays } = require("../utils/addDays");
const { db } = require("../utils/db");
const PaginatorService = require("./PaginatorService");
const UserService = require("./UserService");
const { appendImages } = require("./manageOffers");
const OfferBoostType = require("../utils/OfferBoostType");
const nodemailer = require("nodemailer");

class OffersService extends PaginatorService {
  static selectedFields = {
    id: true,
    title: true,
    author: true,
    authorName: true,
    description: true,
    price: true,
    pricePerMonth: true,
    type: true,
    sellType: true,
    properties: true,
    createdAt: true,
    createdOnIp: false,
    OfferViews: {
      select: {
        id: true,
      },
    },
  };

  static toDTO(offer) {
    const dto = {
      ...offer,
      viewsCount: offer.OfferViews.length,
    };

    delete dto.OfferViews;

    return dto;
  }

  static async countByCategory(category) {
    const count = await db.offers.count({
      where: {
        deleted: false,
        type: category,
      },
    });

    return {
      count,
      category,
    };
  }

  static async getRandomBoostedOffers(type) {
    const count = await db.offers.count({
      where: {
        AND: [
          { properties: { path: "$.isBoosted", equals: true } },
          { properties: { path: "$.boostType", array_contains: type } },
        ],
      },
    });

    const takeTo = { [OfferBoostType.MAIN]: 6, [OfferBoostType.GLOBAL]: 3 }[
      type
    ];

    let skipTo = Math.floor(Math.random() * (count - takeTo + 1) + 1);

    if (skipTo <= 0) {
      skipTo = 0;
    }

    const offers = await db.offers.findMany({
      where: {
        AND: [
          { properties: { path: "$.isBoosted", equals: true } },
          { properties: { path: "$.boostType", array_contains: type } },
        ],
      },
      skip: skipTo,
      select: this.selectedFields,
      take: takeTo,
      orderBy: {
        id: "asc",
      },
    });

    return offers.map((o) => this.toDTO(o));
  }

  static async findAll({
    page,
    boostType,
    user,
    type,
    city,
    region,
    sellType,
    minPrice,
    maxPrice,
    bedrooms,
    rooms,
    search,
  }) {
    const paginate = this.getPaginator(page || 1);

    const where = { AND: [] };

    if (search)
      where.OR = [
        { title: { contains: search } },
        { description: { contains: search } },
      ];
    if (user) where.author = user;
    if (boostType) {
      where.AND.push(
        { properties: { path: "$.isBoosted", equals: true } },
        { properties: { path: "$.boostType", array_contains: boostType } },
      );
    }
    if (type) {
      if (!Object.values(OfferType).includes(type)) {
        throw new APIError("offerType must be a offer type enum case");
      }

      where.type = type;
    }

    if (sellType) {
      if (!Object.values(SellType).includes(sellType)) {
        throw new APIError("sellType must be a sell type enum case");
      }

      where.sellType = sellType;
    }
    if (minPrice && maxPrice) {
      where.AND = [
        {
          AND: [
            {
              OR: [
                {
                  AND: [
                    {
                      price: {
                        not: null,
                      },
                    },
                    {
                      price: {
                        gte: Number.parseInt(minPrice),
                        lte: Number.parseInt(maxPrice),
                      },
                    },
                  ],
                },
                {
                  AND: [
                    {
                      pricePerMonth: {
                        not: null,
                      },
                    },
                    {
                      pricePerMonth: {
                        gte: Number.parseInt(minPrice),
                        lte: Number.parseInt(maxPrice),
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
    }

    if (city) {
      where.AND.push({
        properties: {
          path: "$.address.city",
          equals: city,
        },
      });
    }

    if (region) {
      where.AND.push({
        properties: {
          path: "$.address.region",
          equals: region,
        },
      });
    }

    if (bedrooms)
      where.AND.push({
        properties: { path: "$.bedrooms", equals: Number.parseInt(bedrooms) },
      });
    if (rooms)
      where.AND.push({
        properties: { path: "$.rooms", equals: Number.parseInt(rooms) },
      });

    const offers = await paginate(db.offers, {
      where,
      select: this.selectedFields,
    });

    return {
      data: offers.data.map((o) => this.toDTO(o)),
      meta: offers.meta,
    };
  }

  static async createOffer(data, ip, userId) {
    const user = await UserService.findById(userId);

    if (user.listings === 0) {
      throw new APIError("You don't have enough listings");
    }

    const date = new Date();
    const expiration = addDays(date, 30);

    try {
      const [offer] = await db.$transaction([
        db.offers.create({
          data: {
            author: user.id,
            authorName: `${user.firstName} ${user.lastName}`,
            title: data.title,
            description: data.description,
            price: data.price,
            pricePerMonth: data.pricePerMonth,
            region: data.region,
            type: data.type,
            sellType: data.sellType,
            city: data.city,
            properties: { ...data.properties, isBoosted: false, boostType: [] },
            expires: expiration,
            createdOnIp: ip,
          },
        }),
        db.user.update({
          where: {
            id: user.id,
          },
          data: {
            listings: {
              decrement: 1,
            },
          },
        }),
      ]);

      await appendImages(user.id, offer.id, data.properties);

      return await db.offers.findUnique({
        where: { id: offer.id },
        select: this.selectedFields,
      });
    } catch (e) {
      throw e;
    }
  }

  static async getUserOffers(userId, { all, page }) {
    if (all) {
      return await db.offers.findMany({
        where: { author: userId },
        select: this.selectedFields,
      });
    }

    const paginate = this.getPaginator(page || 1);

    return await paginate(db.offers, {
      where: {
        author: userId,
      },
      select: this.selectedFields,
    });
  }

  static async getById(id) {
    const offer = await db.offers.findUnique({
      where: { id },
      select: this.selectedFields,
    });

    if (!offer) {
      throw new APIError("Nie znaleziono oferty");
    }

    return this.toDTO(offer);
  }

  static async report(userId, offerId) {
    if (
      await db.report.findFirst({ where: { byId: userId, offerId: offerId } })
    ) {
      throw new APIError("Juz zglosiles te oferte");
    }
    const transporter = nodemailer.createTransport({
      port: process.env.MAIL_PORT,
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
      },
      secure: true,
    });

    const report = await db.report.create({
      data: { offerId, byId: userId },
      include: { offer: { select: { title: true } } },
    });

    const mailOptions = {
      from: process.env.MAIL_EMAIL,
      to: "pomoc@mojachatka.pl",
      subject: `[ZGLOSZENIE] ${report.offer.title}`,
      html: `<a href="https://mojachatka.pl/oferta/${offerId}">Odnosnik</a>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Wyslano zglosozenie: " + info.response);
      }
    });
  }
}

module.exports = OffersService;
