const APIError = require("../errors/APIError");
const { addDays } = require("../utils/addDays");
const { db } = require("../utils/db");
const PaginatorService = require("./PaginatorService");
const UserService = require("./UserService");
const { appendImages } = require("./manageOffers");

class OffersService extends PaginatorService {
  static async createOffer(data, userId) {
    const user = await UserService.findById(userId)

    if (user.listings === 0) {
      throw new APIError("You don't have enough listings");
    }

    const date = new Date();
    const expiration = addDays(date, 30);

    const [offer] = await db.$transaction([
      db.offers.create({
        data: {
          author: user.id,
          authorName: user.username,
          title: data.title,
          description: data.description,
          price: data.price,
          region: data.region,
          type: data.type,
          sellType: data.sellType,
          city: data.city,
          isBoosted: false,
          properties: data.properties,
          expires: expiration
        }
      }),
      db.user.update({
        where: {
          id: user.id
        },
        data: {
          listings: {
            decrement: 1
          }
        }
      })
    ]);

    await appendImages(user.id, offer.id, data.properties)

    return await db.offers.findUnique({ where: { id: offer.id } });
  }

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

