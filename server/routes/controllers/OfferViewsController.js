const OfferViewsService = require("../../services/OfferViewsService");

class OfferViewsController {
  static async getAccountViews(req, res) {
    const userId = req.payload.data.id;

    res.status(200).json({
      views: await OfferViewsService.getAccountViews(userId, req.query),
    });
  }
}

module.exports = OfferViewsController;
