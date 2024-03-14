const { db } = require("../utils/db");

module.exports = class ExpiredOffersTreatment {
  static async delete() {
    await db.offers.updateMany({
      where: { expires: { lt: new Date() } },
      data: { deleted: true },
    });
  }
};
