const { SellType, OfferType } = require("@prisma/client");
const APIError = require("../errors/APIError");
const { addDays } = require("../utils/addDays");
const { db } = require("../utils/db");
const PaginatorService = require("./PaginatorService");
const UserService = require("./UserService");
const { appendImages } = require("./manageOffers");

class OffersService extends PaginatorService {
  static selectedFields = {
    id: true,
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

  static async findAll({
    page,
    boosted,
    user,
    offerType,
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
    if (boosted) where.isBoosted = boosted;
    if (offerType) {
      if (!Object.values(OfferType).includes(offerType)) {
        throw new APIError("offerType must be a offer type enum case");
      }

      where.type = offerType;
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

    return await paginate(db.offers, {
      where,
      select: this.selectedFields,
    });
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
            authorName: user.username,
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
        select: this.selectedFields,
      },
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
