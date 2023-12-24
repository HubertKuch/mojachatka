const { db } = require("../utils/db");

class ChatService {
  static async getChats(userId) {
    return await db.chat.findMany({
      where: {
        users: {
          some: {
            id: userId,
          },
        },
      },
    });
  }
}

module.exports = ChatService;
