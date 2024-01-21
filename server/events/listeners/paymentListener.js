const { db } = require("../../utils/db");
const { PaymentsEventEmitter } = require("../emitters/PaymentEmitter");

const instance = PaymentsEventEmitter.getInstance();

/**
 * @param {import("@prisma/client").AccountPacketPayment} payment
 * */
async function resolveAccountPacketPayment(payment) {
  const packet = await db.accountPacketPayment.findFirst({
    where: {
      payment: {
        id: payment.id,
      },
    },
    include: {
      payment: true,
      user: true,
      packet: true,
    },
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
        userId: relatedUser.id,
      },
    });

    if (snap.properties.boosts) {
      for (const boost of snap.properties.boosts) {
        await db.userBoosts.create({
          data: {
            userId: relatedUser.id,
            properties: { days: boost.days, type: boost.type, used: false },
          },
        });
      }
    }

    if (snap.properties.listings) {
      await db.user.update({
        where: { id: relatedUser.id },
        data: { listings: { increment: snap.properties.listings } },
      });
    }
  }
}

async function resolveBoostPacketPayment(payment) {
  const boostPayment = await db.boostOfferPayment.findFirst({
    where: { paymentId: payment.id },
    select: { user: true, boostPacket: true },
  });
  const relatedUser = boostPayment.user;

  await db.userBoosts.create({
    data: {
      userId: relatedUser.id,
      properties: {
        days: boostPayment.boostPacket.days,
        type: boostPayment.boostPacket.properties.boostType,
        used: false,
      },
    },
  });
}

/**
 * @param {import("@prisma/client").Payment} payment
 * **/
instance.on(process.env.EVENT_PAYMENT_SUCCESS, async (payment) => {
  if (
    await db.accountPacketPayment.findFirst({
      where: { payment: { id: payment.id } },
    })
  ) {
    await resolveAccountPacketPayment(payment);
  } else {
    await resolveBoostPacketPayment(payment);
  }
});
