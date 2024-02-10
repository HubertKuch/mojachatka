const ChatService = require("../services/ChatService");
const UserService = require("../services/UserService");
const jwt = require("jsonwebtoken");

function initializeChatsIo(io) {
  const handshakeAuthorized = async (socket) => {
    const token = socket.handshake.query.token;
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const userId = payload.data.id;

    return await UserService.findById(userId);
  };

  io.on("connection", async (socket) => {
    try {
      const user = await handshakeAuthorized(socket);

      socket.emit("chats", await ChatService.getChats(user.id));

      socket.on("chats", async () => {
        const chats = await ChatService.getChats(user.id);

        chats.forEach((chat) => socket.join(chat.id));

        socket.emit("chats", chats);
      });

      socket.on("chat", async (id) => {
        if (!id) {
          return socket.emit("chat", { error: "Id must be specified" });
        }

        socket.emit("chat", await ChatService.getChatById(id, user.id));
      });

      socket.on("message", async (receiverId, msg) => {
        const senderId = user.id;

        const message = await ChatService.sendMessage(
          senderId,
          receiverId,
          msg,
        );

        if (message.error) {
          return socket.emit("message", message);
        }

        socket.to(message.chatId).emit("message", message);
      });
    } catch (e) {
      console.error(e);
    }
  });
}

module.exports = initializeChatsIo;
