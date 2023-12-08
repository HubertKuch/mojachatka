const express = require('express');
const OfferBoostType = require('../utils/OfferBoostType');
const BoostOfferService = require('../services/BoostOfferService');
const router = express.Router();

router.post('/', async (req, res, next) => {
  const { offerId, boostId } = req.body;
  const userId = req.payload.data.id;

  try {
    const boost = await BoostOfferService.boostOffer(userId, offerId, boostId, OfferBoostType.MAIN);

    res.status(200).json(boost);
  } catch (e) {
    next(e);
  }
})

module.exports = router
