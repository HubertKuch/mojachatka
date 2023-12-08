const express = require('express');
const OffersService = require('../services/OffersService');
const router = express.Router()

router.get('/getUserOffers', async (req, res) => {
  const { page } = req.query;
  const thePage = page || 1
  const user = req.payload.data;

  res.status(200).json(await OffersService.getUserOffers(user.id, thePage));
})

module.exports = router
