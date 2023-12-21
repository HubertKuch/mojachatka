const APIError = require("../../errors/APIError");
const FeatureService = require("../../services/FeatureService");

class FeatureController {
  static async find(req, res) {
    res.status(200).json(await FeatureService.getFeatures());
  }

  static async findById(req, res) {
    const { id } = req.params;

    if (!id) {
      return next(new APIError("Id must be specified by `id` param", 400));
    }

    const feature = await FeatureService.getFeatureById(id);

    if (!feature) {
      return next(new APIError("Feature not found", 404));
    }

    res.status(200).json(feature);
  }
}

module.exports = FeatureController;
