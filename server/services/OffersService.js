const { db } = require("../utils/db");
const PaginatorService = require("./PaginatorService");

class OffersService extends PaginatorService {
  static async getUserOffers(userId, { all, page }) {
    if (all) {
      return await db.offers.findMany({ where: { author: userId } });
    }

    const paginate = this.getPaginator(page || 1);

    return await paginate(db.offers, {
      where: {
        author: userId
      }
    });
  }

  static async getById(id) {
    return await db.offers.findUnique({ where: { id } });
  }
}

module.exports = OffersService;

