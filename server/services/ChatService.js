const { db } = require("../utils/db");

class ChatService {
  static async getChats(collectorId) {
    const chats = await db.chat.findMany({
      where: {
        users: {
          some: {
            id: collectorId,
          },
        },
      },
      select: {
        users: {
          where: {
            id: {
              not: collectorId,
            },
          },
          select: {
            username: true,
            id: true,
          },
        },
        id: true,
        Message: {
          select: {
            id: true,
          },
          where: {
            AND: [
              {
                meta: {
                  path: "$.receiver",
                  equals: collectorId,
                },
              },
              {
                meta: {
                  path: "$.readed",
                  equals: false,
                },
              },
            ],
          },
        },
      },
    });

    return await Promise.all(
      chats.map(async (chat) => ({
        id: chat.id,
        receiver: chat.users[0],
        lastMessage: await this.getLastMessageFromChat(chat.id),
        unReadedMessages: chat.Message.length,
      })),
    );
  }

  static async getLastMessageFromChat(chatId) {
    return await db.message.findFirst({
      where: {
        chatId,
      },
      take: 1,
      orderBy: {
        sentAt: "desc",
      },
    });
  }

  static async getChatById(chatId, collectorId) {
    const chat = await db.chat.findFirst({
      where: {
        id: chatId,
        users: {
          some: {
            id: collectorId,
          },
        },
      },
      select: {
        users: {
          select: {
            username: true,
            id: true,
          },
          where: {
            id: {
              not: collectorId,
            },
          },
        },
        Message: {
          select: {
            sentAt: true,
            meta: true,
            message: true,
            sender: {
              select: {
                id: true,
                username: true,
              },
            },
          },
          orderBy: {
            sentAt: "asc",
          },
        },
      },
    });

    return {
      id: chat.id,
      users: chat.users,
      receiver: chat.users[0],
      messages: chat.Message.map((message) => ({
        ...message,
        own: message.sender.id === collectorId,
      })),
    };
  }

  static async sendMessage(senderId, receiverId, message) {
    let chat = await db.chat.findFirst({
      where: {
        AND: [
          {
            users: {
              some: {
                id: senderId,
              },
            },
          },
          {
            users: {
              some: {
                id: receiverId,
              },
            },
          },
        ],
      },
    });

    if (!chat) {
      chat = await db.chat.create({
        data: {
          users: {
            connect: [{ id: senderId }, { id: receiverId }],
          },
        },
      });
    }

    return await db.message.create({
      select: {
        chatId: true,
        message: true,
        sentAt: true,
        meta: true,
      },
      data: {
        message: message,
        sender: {
          connect: {
            id: senderId,
          },
        },
        meta: {
          sender: senderId,
          receiver: receiverId,
          readed: false,
        },
        chat: {
          connect: {
            id: chat.id,
          },
        },
      },
    });
  }
}

module.exports = ChatService;
