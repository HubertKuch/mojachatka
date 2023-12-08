const { db } = require("../../utils/db");
const { PaymentsEventEmitter } = require("../emitters/PaymentEmitter");

const instance = PaymentsEventEmitter.getInstance();

/**
 * @param {import("@prisma/client").Payment} payment
 * **/
instance.on(process.env.EVENT_PAYMENT_SUCCESS, async (payment) => {
  const packet = await db.accountPacketPayment.findFirst({
    where: {
      payment: {
        id: payment.id
      }
    },
    include: {
      payment: true,
      user: true,
      packet: true
    }
  });

  if (packet) {
    const relatedUser = packet.user;

    const snap = await db.userAccountPacketsSnapshots.create({
      data: {
        name: packet.packet.name,
        packetId: packet.packetId,
        price: packet.packet.price,
        properties: packet.packet.properties,
        boughtAt: packet.payment.resolvedAt,
        userId: relatedUser.id
      }
    });

    if (snap.properties.boosts) {
      for (const boost of snap.properties.boosts) {
        await db.userBoosts.create({
          data: {
            userId: relatedUser.id,
            properties: { ...boost, used: false },
          }
        });
      }
    }

    if (snap.properties.listings) {
      await db.user.update({ where: { id: relatedUser.id }, data: { listings: { increment: snap.properties.listings } } });
    }

    if (snap.properties.bids) {
      await db.user.update({ where: { id: relatedUser.id }, data: { bids: { increment: snap.properties.bids } } });
    }
  }
});

