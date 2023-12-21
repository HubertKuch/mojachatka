const { db } = require("../utils/db");
const APIError = require("../errors/APIError");

class FeatureService {
  static async getFeatures() {
    return await db.feature.findMany();
  }

  static async addFeature({ name }) {
    if (await db.feature.findUnique({ where: { name } })) {
      throw new APIError("Name is already used", 409);
    }

    return await db.feature.create({ data: { name } });
  }

  static async getFeatureById(id) {
    return await db.feature.findUnique({ where: { id } });
  }
}

module.exports = FeatureService;
