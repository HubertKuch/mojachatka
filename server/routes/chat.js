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
    console.log("connected");

    const user = await handshakeAuthorized(socket);

    socket.emit("chats", await ChatService.getChats(user.id));

    socket.on("message", async (senderId, receiverId, message) => {
      //      await ChatService.sendMessage(senderId, receiverId, message);
    });
  });
}

module.exports = initializeChatsIo;
