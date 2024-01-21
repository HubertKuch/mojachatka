const { db } = require("../utils/db");

class UserService {
  static async findById(id) {
    return await db.user.findUnique({ where: { id } });
  }

  static async getPublicUser(id) {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        type: true,
        firstName: true,
        SocialMedia: true,
        telephone: true,
      },
    });

    user.username = `${user.firstName}`;

    return user;
  }
}

module.exports = UserService;
