const { SellType, OfferType } = require("@prisma/client");
const APIError = require("../errors/APIError");
const { addDays } = require("../utils/addDays");
const { db } = require("../utils/db");
const PaginatorService = require("./PaginatorService");
const UserService = require("./UserService");
const { appendImages } = require("./manageOffers");
const OfferBoostType = require("../utils/OfferBoostType");

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
    lat: true,
    lng: true,
    isBoosted: true,
    properties: true,
    createdAt: true,
    createdOnIp: false,
    OfferFeature: {
      select: {
        Feature: {
          select: { name: true, id: true },
        },
      },
    },
    OfferViews: {
      select: {
        id: true,
      },
    },
  };

  static toDTO(offer) {
    const dto = {
      ...offer,
      features: offer.OfferFeature.map((f) => ({
        name: f.Feature.name,
        id: f.Feature.id,
      })),
      viewsCount: offer.OfferViews.length,
    };

    delete dto.OfferViews;
    delete dto.OfferFeature;

    return dto;
  }

  static async countByCategory(category) {
    const count = await db.offers.count({
      where: {
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
      where: { isBoosted: true, boostType: type },
    });

    const takeTo = { [OfferBoostType.MAIN]: 6, [OfferBoostType.GLOBAL]: 3 }[
      type
    ];

    let skipTo = Math.floor(Math.random() * (count - takeTo + 1) + 1);

    if (skipTo <= 0) {
      skipTo = 0;
    }

    const offers = await db.offers.findMany({
      where: { isBoosted: true, boostType: type },
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
      where.boostType = boostType;
      where.isBoosted = true;
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
      const features = data.features
        ? await Promise.all(
            data.features.map(async (featureId) => {
              const feature = await db.feature.findUnique({
                where: { id: featureId },
              });

              if (!feature) {
                throw new APIError(`Feature ${featureId} not recognized`);
              }

              return feature;
            }),
          )
        : [];

      const [offer] = await db.$transaction([
        db.offers.create({
          data: {
            author: user.id,
            authorName: `${user.firstName} ${user.lastName}`,
            title: data.title,
            description: data.description,
            price: data.price,
            lat: data.lat,
            lng: data.lng,
            region: data.region,
            type: data.type,
            sellType: data.sellType,
            city: data.city,
            isBoosted: false,
            properties: data.properties,
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

      features.forEach(async (feature) => {
        await db.offerFeature.create({
          data: { featureId: feature.id, offerId: offer.id },
        });
      });

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
    return this.toDTO(
      await db.offers.findUnique({
        where: { id },
        select: this.selectedFields,
      }),
    );
  }
}

module.exports = OffersService;
