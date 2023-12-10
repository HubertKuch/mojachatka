const { db } = require('../utils/db');
const APIError = require("../errors/APIError");
const { Prisma } = require('@prisma/client');

class AdminUserService {
  static #userSafeSelect = {
    id: true,
    banned: true,
    Ban: true,
    bids: true,
    role: true,
    listings: true,
    type: true,
    email: true,
    offers: true,
    username: true,
    phoneNumber: true
  }


  /** @param {Prisma.UserWhereInput} where **/
  static async getUsers(where = {}) {
    return await db.user.findMany({
      where,
      select: this.#userSafeSelect
    });
  }

  /** @param {Prisma.UserWhereUniqueInput} where **/
  static async getUserById(where = {}) {
    return await db.user.findUnique({ where, select: this.#userSafeSelect });
  }

  static async banUser(userId, cause) {
    const user = await db.user.findUnique({ where: { id: userId } });

    if (user.banned) {
      throw new APIError("User already banned", 409);
    }

    const [updatedUser, ban] = await db.$transaction([
      db.user.update({ where: { id: userId }, data: { banned: true } }),
      db.ban.create({ data: { cause: cause, userId } })
    ]);

    return ban;
  }

  /**
   * @param {Prisma.UserWhereUniqueInput} where
   * @param {Prisma.UserUpdateInput} data
   * **/
  static async updateUser(where, data) {
    return await db.user.update({ where, select: this.#userSafeSelect, data });
  }
}

module.exports = AdminUserService;
