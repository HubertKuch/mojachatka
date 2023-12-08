const { OfferType } = require('@prisma/client');

const router = require('express').Router();

router.get("/offerTypes", async (req, res) => {
  res.status(200).json(Object.values(OfferType));
});

module.exports = router;
