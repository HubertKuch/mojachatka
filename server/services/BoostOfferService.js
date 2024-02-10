const { db } = require("../utils/db");
const { addDays } = require("../utils/addDays");
const APIError = require("../errors/APIError");
const OfferBoostType = require("../utils/OfferBoostType");
const { initCheckoutSession } = require("./payments");

class BoostOfferService {
  static async buyBoostPacket(buyerId, packetId) {
    const packet = await db.boostPacket.findFirst({ where: { id: packetId } });

    if (!packet) {
      throw new APIError("Nie znaleziono szukanego pakietu");
    }

    const session = await initCheckoutSession({
      amount: packet.price,
      name: packet.name,
    });

    const payment = await db.payment.create({
      data: {
        status: "PENDING",
        stripeId: session.id,
        continueUrl: session.url,
      },
    });

    return await db.boostOfferPayment.create({
      data: {
        paymentId: payment.id,
        boostPacketId: packet.id,
        userId: buyerId,
      },
      select: {
        payment: {
          select: {
            continueUrl: true,
          },
        },
      },
    });
  }

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

    if (!boost.properties?.type?.includes(type)) {
      throw new APIError(`Boost type is not the same as ${type}`, 400);
    }

    if (!offer.properties.boostType) {
      offer.properties.boostType = [];
    }

    if (offer.properties.boostType.includes(type)) {
      throw new APIError(`Property already boosted with ${type} type`, 400);
    }

    if (!user || !offer) {
      throw new APIError(
        "Offer, boost and user id must specified properly",
        400,
      );
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
      db.offers.update({
        where: { id: offerId },
        data: {
          properties: {
            ...offer.properties,
            isBoosted: true,
            boostType: [...offer.properties.boostType, type],
          },
        },
      }),
    ]);

    return { boostedOffer, userBoost, updatedOffer };
  }
}

module.exports = BoostOfferService;
