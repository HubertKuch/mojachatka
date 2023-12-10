const { db } = require('../utils/db');

const stripe = require('stripe')(process.env.STRIPE_SECRET);

async function initPayment({ amount, description }) {
  const charge = await stripe.paymentIntents.create({
    amount,
    currency: 'pln',
    description,
    payment_method_types: ["card"]
  });

  return charge;
}

async function getOpenCheckoutSessions() {
  return await stripe.checkout.sessions.list({
    limit: 100,
    status: 'open'
  });
}

async function initCheckoutSession({ name, amount }) {
  const session = await stripe.checkout.sessions.create({
    success_url: process.env.PAYMENT_SUCCESS_URL,
    line_items: [
      {
        price_data: {
          currency: 'pln',
          product_data: {
            name,
          },
          unit_amount: amount
        }, quantity: 1
      },
    ],
    mode: 'payment',
  });

  return session;
}

async function getPaymentLinkById(id) {
  return await stripe.paymentLinks.retrieve(id);
}

async function retrieveCheckout(id) {
  return await stripe.checkout.sessions.retrieve(id);
}

async function getAllNotResolvedPayments() {
  return await db.payment.findMany({ where: { resolved: false } });
}

module.exports = { initPayment, getAllNotResolvedPayments, getPaymentLinkById, initCheckoutSession, getOpenCheckoutSessions, retrieveCheckout };

