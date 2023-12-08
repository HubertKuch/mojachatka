const express = require('express');
const OffersService = require('../services/OffersService');
const router = express.Router({ mergeParams: true });
const APIError = require('../errors/APIError');

router.get('/getOffer/:id', async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(new APIError("Id must be provided", 400)); 
  }

  const offer = await OffersService.getById(id);

  if (!offer) {
    return next(new APIError("Offer not found", 404));
  }

  res.status(200).json(offer);
})

module.exports = router
