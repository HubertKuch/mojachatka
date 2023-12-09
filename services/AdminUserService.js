const { db } = require('../utils/db');
const APIError = require("../errors/APIError");

class AdminUserService {
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
}

module.exports = AdminUserService;
