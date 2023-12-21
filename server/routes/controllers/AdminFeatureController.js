const APIError = require("../../errors/APIError");
const FeatureService = require("../../services/FeatureService");

class AdminFeatureController {
  static async add(req, res, next) {
    const name = req.body.name;

    if (!name) {
      return next(new APIError("Name must be specified"));
    }

    try {
      const feature = await FeatureService.addFeature({ name });

      res.status(200).json(feature);
    } catch (e) {
      return next(e);
    }
  }
}

module.exports = AdminFeatureController;
