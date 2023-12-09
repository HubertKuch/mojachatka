const { buyPacket, getPackets, getUserAccountPackets } = require('../../services/packets');
const { db } = require('../../utils/db');
const getOrThrow = require('../../utils/getOrThrow');

class AccountPacketsController {
  static async buyPacket(req, res) {
    const packetId = getOrThrow(req.body.packetId, new Error("Field: `packetId` is required"));
    const user = req.payload.data;

    const packet = await db.accountPackets.findUnique({ where: { id: packetId } });

    if (!packet || !packet.properties.allowedFor.includes(user.type)) {
      return res.status(400).json({ message: "Invalid packet data for that user or invalid packet id" });
    }

    try {
      const boughtPacket = await buyPacket({ user, packetId })

      res.status(201).json(boughtPacket);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getAllowedAccountPackets(req, res) {
    const { type } = req.query;

    if (!Object.values(UserType).includes(type)) {
      next(new APIError("Unknow userType", 400));
    }
  }

  static async getUserAccountPackets(req, res) {
    const userId = req.payload.data.id;

    res.status(200).json(await getUserAccountPackets(userId));
  }

  static async getAccountPackets(req, res) {
    res.status(200).json(await getPackets());
  }
}

module.exports = AccountPacketsController;

