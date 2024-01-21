const dayjs = require("dayjs");
const { db } = require("../utils/db");
const { initCheckoutSession } = require("./payments");

async function getPackets() {
  return await db.accountPackets.findMany();
}

async function getUserAccountPackets(userId) {
  const packets = await db.userAccountPacketsSnapshots.findMany({
    where: { userId },
  });

  return packets.map((packet) => {
    const expiringDate = dayjs(packet.boughtAt).add(
      packet.properties.expirationDays,
      "days",
    );

    packet.expiringDate = expiringDate.toDate();

    packet.isExpired = Date.now() > expiringDate.valueOf();

    return packet;
  });
}

async function buyPacket({ packetId, user }) {
  const packet = await db.accountPackets.findUnique({
    where: { id: packetId },
  });

  if (!packet) {
    throw new Error("Packet id incorrect");
  }

  const session = await initCheckoutSession({
    amount: packet.price,
    name: packet.name,
  });

  const payment = await db.payment.create({
    data: {
      status: "PENDING",
      stripeId: session.id,
      continueUrl: session.url,
    },
  });

  return await db.accountPacketPayment.create({
    data: {
      paymentId: payment.id,
      packetId,
      userId: user.id,
    },
    select: {
      payment: {
        select: {
          continueUrl: true,
        },
      },
      packet: true,
    },
  });
}

module.exports = { getPackets, buyPacket, getUserAccountPackets };
