const { db } = require('../utils/db');
const { addDays } = require("../utils/addDays");
const APIError = require('../errors/APIError');

class BoostOfferService {

  static async boostOffer(loggedInUserId, offerId, boostId) {
    const user = await db.user.findUnique({ where: { id: loggedInUserId } });
    const offer = await db.offers.findUnique({ where: { id: offerId } });
    const boost = await db.userBoosts.findFirst({
      where: {
        userId: loggedInUserId, id: boostId,
        properties: {
          path: "$.used",
          equals: false
        }
      }
    });

    if (!boost) {
      throw new APIError("Boost id is incorrect or already used", 409);
    }
    
    if (!user || !offer) {
      throw new APIError("Offer, boost and user id must specified properly", 400);
    }

    boost.properties['used'] = true;

    const [boostedOffer, userBoost, updatedOffer] = await db.$transaction([
      db.offerBoosts.create({
        data: {
          offerId: offerId,
          userBoostId: boostId,
          expires: addDays(new Date(), boost.properties.days),
          properties: boost.properties
        }
      }),
      db.userBoosts.update({ where: { id: boostId }, data: { properties: boost.properties } }),
      db.offers.update({ where: { id: offerId }, data: { isBoosted: true } })
    ]);

    return { boostedOffer, userBoost, updatedOffer };
  }

}

module.exports = BoostOfferService;
