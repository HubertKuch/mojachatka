const { db } = require("../utils/db");

class UserService {
  static async findById(id) {
    return await db.user.findUnique({ where: { id } });
  }

  static async getPublicUser(id) {
    return await db.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        type: true,
        username: true,
        SocialMedia: true,
        phoneNumber: true,
      },
    });
  }
}

module.exports = UserService;
