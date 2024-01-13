const OfferBoostType = require("../../utils/OfferBoostType");
const BoostOfferService = require("../../services/BoostOfferService");
const { db } = require("../../utils/db");
const APIError = require("../../errors/APIError");

class BoostController {
  static async buyBoost(req, res, next) {
    try {
      const userId = req.payload.data.id;
      const boostId = req.params.id;

      if (!boostId) {
        return next(new APIError("Nie wskazano pakietu"));
      }

      const payment = await BoostOfferService.buyBoostPacket(userId, boostId);

      return res.status(200).json(payment);
    } catch (e) {
      return next(e);
    }
  }

  static async createBoostedMainOffer(req, res, next) {
    const { offerId, boostId } = req.body;
    const userId = req.payload.data.id;

    try {
      const boost = await BoostOfferService.boostOffer(
        userId,
        offerId,
        boostId,
        OfferBoostType.MAIN,
      );

      res.status(200).json(boost);
    } catch (e) {
      next(e);
    }
  }

  static async createBoostedOffer(req, res, next) {
    const { offerId, boostId } = req.body;
    const userId = req.payload.data.id;

    try {
      const boost = await BoostOfferService.boostOffer(
        userId,
        offerId,
        boostId,
      );

      res.status(200).json(boost);
    } catch (e) {
      next(e);
    }
  }

  static async getBoostPackets(req, res, next) {
    res.status(200).json(await db.boostPacket.findMany());
  }

  static async getUserBoosts(req, res, next) {
    const user = req.payload.data;

    res
      .status(200)
      .json(await db.userBoosts.findMany({ where: { userId: user.id } }));
  }
}

module.exports = BoostController;
