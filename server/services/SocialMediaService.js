const { db } = require("../utils/db");

class SocialMediaService {
  static async putSocialMedia(userId, { type, link }) {
    const exists = await db.socialMedia.findFirst({ where: { userId, type } });

    if (exists) {
      await db.socialMedia.updateMany({
        where: { type, userId },
        data: { link },
      });

      return { message: "updated" };
    }

    await db.socialMedia.create({ data: { userId, type, link } });

    return { message: "updated" };
  }

  static async getUserSocialMedia(userId) {
    return await db.socialMedia.findMany({
      where: {
        userId,
      },
    });
  }
}

module.exports = SocialMediaService;
