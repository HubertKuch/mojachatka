const { db } = require("../utils/db");
const { retrieveCheckout } = require("./payments");
const { PaymentsEventEmitter } = require("../events/emitters/PaymentEmitter");

(async () => {
  setInterval(async () => {
    const notResolvedPaymentes = await db.payment.findMany({
      where: { status: "PENDING" },
    });

    for (const dbPayment of notResolvedPaymentes) {
      const stripePayment = await retrieveCheckout(dbPayment.stripeId);

      if (!stripePayment) {
        continue;
      }

      if (stripePayment.payment_status === "paid") {
        const payment = await db.payment.update({
          where: { stripeId: dbPayment.stripeId },
          data: {
            resolved: true,
            resolvedAt: new Date().toISOString(),
            status: "SUCCEEDED",
          },
        });

        PaymentsEventEmitter.getInstance().emit(
          process.env.EVENT_PAYMENT_SUCCESS,
          payment,
        );
      } else if (stripePayment.payment_status === "unpaid") {
      } else if (stripePayment.payment_status === "failed") {
        await db.payment.update({
          where: { stripeId: dbPayment.stripeId },
          data: {
            resolved: true,
            resolvedAt: new Date().toISOString(),
            status: "FAILED",
          },
        });
      }
    }
  }, process.env.PAYMENT_RESOLVE_INTERVAL);
})();
