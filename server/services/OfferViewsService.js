const { db } = require("../utils/db");

module.exports = class OffersViewsService {
  static async getAccountViews(userId) {
    const totalViews = await db.offerViews.count({
      where: {
        offer: {
          User: {
            id: userId,
          },
        },
      },
    });

    return {
      total: totalViews,
      viewsByOffer: await this.getOffersViews(userId),
    };
  }

  static async getOffersViews(userId) {
    const viewsByOffers = await db.offers.findMany({
      where: {
        User: {
          id: userId,
        },
      },
      select: {
        id: true,
        title: true,
        OfferViews: {
          select: {
            offer: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
    });

    return viewsByOffers.map((views) => {
      return {
        views: views.OfferViews.length,
        title: views.title,
        offerId: views.id,
      };
    });
  }

  static async viewed(ip, offers) {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    for (const offer of offers) {
      if (offer.createdOnIp === ip) {
        continue;
      }

      const viewedFromCurrIp = await db.offerViews.findFirst({
        where: {
          by: ip,
          at: {
            gt: twentyFourHoursAgo,
          },
          offerId: offer.id,
        },
      });

      if (viewedFromCurrIp) {
        continue;
      }

      await db.offerViews.create({ data: { offerId: offer.id, by: ip } });
    }
  }
};
