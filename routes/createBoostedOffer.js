const express = require('express')
const router = express.Router();
const BoostOfferService = require("../services/BoostOfferService.js");

router.post('/', async (req, res, next) => {
  const { offerId, boostId } = req.body;
  const userId = req.payload.data.id;

  try {
    const boost = await BoostOfferService.boostOffer(userId, offerId, boostId);

    res.status(200).json(boost);
  } catch (e) {
    next(e);
  }
})

module.exports = router
