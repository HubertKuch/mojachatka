const { buyPacket } = require('../services/packets');
const { db } = require('../utils/db');
const getOrThrow = require('../utils/getOrThrow');

const router = require('express').Router();

router.post("/buyPacket", async (req, res) => {
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
});

module.exports = router;

