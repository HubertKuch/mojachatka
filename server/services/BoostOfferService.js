const { db } = require("../utils/db");
const { addDays } = require("../utils/addDays");
const APIError = require("../errors/APIError");
const OfferBoostType = require("../utils/OfferBoostType");

class BoostOfferService {
  static async boostOffer(
    loggedInUserId,
    offerId,
    boostId,
    type = OfferBoostType.GLOBAL,
  ) {
    const user = await db.user.findUnique({ where: { id: loggedInUserId } });
    const offer = await db.offers.findUnique({ where: { id: offerId } });
    const boost = await db.userBoosts.findFirst({
      where: {
        userId: loggedInUserId,
        id: boostId,
      },
    });

    if (!boost) {
      throw new APIError("Boost id is incorrect or already used", 409);
    }

    if (boost.properties.used) {
      throw new APIError("Boost already used", 409);
    }

    if (boost.properties.type !== type) {
      throw new APIError(`Boost type is not the same as ${type}`, 400);
    }

    if (!user || !offer) {
      throw new APIError(
        "Offer, boost and user id must specified properly",
        400,
      );
    }

    if (offer.isBoosted) {
      throw new APIError("Offer is already boosted");
    }

    boost.properties["used"] = true;

    const [boostedOffer, userBoost, updatedOffer] = await db.$transaction([
      db.offerBoosts.create({
        data: {
          offerId: offerId,
          userBoostId: boostId,
          expires: addDays(new Date(), boost.properties.days),
          properties: boost.properties,
        },
      }),
      db.userBoosts.update({
        where: { id: boostId },
        data: { properties: boost.properties },
      }),
      db.offers.update({ where: { id: offerId }, data: { isBoosted: true } }),
    ]);

    return { boostedOffer, userBoost, updatedOffer };
  }
}

module.exports = BoostOfferService;
