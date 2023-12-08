const express = require('express');
const router = express.Router({ mergeParams: true });
const { db } = require('../utils/db');
const validateOfferImages = require('../utils/validateOfferImages');
const { appendImages } = require('../services/manageOffers');

router.patch('/', async (req, res) => {
  const offerId = req.params.offerId;

  if (!offerId) {
    res.status(400).json({ message: 'Offer id must be specified' });
    return;
  }

  const offer = await db.offers.findFirst({ where: { id: { equals: offerId } } });

  if (!offer) {
    res.status(400).json({ message: 'Invalid id' });
    return;
  }

  const user = req.payload.data;

  if (offer.author !== user.id) {
    res.status(401).json({ message: 'You cannot edit not your offer' });
    return;
  }

  // title description price region type sellType city properties => {bedrooms, rooms, images}
  const requestFieldsOnDatabase = {
    "title": "title",
    "description": "description",
    "price": "price",
    "region": "region",
    "type": "type",
    "sellType": "sellType",
    "city": "city",
    "properties": "properties"
  };

  const requiredPropertiesKeys = ['images', 'rooms', 'bedrooms'];
  try {
    if (!validateOfferImages.validateOfferImages(req.body.data.properties.images)) {
      res.status(400).json({ message: 'Invalid images' });
      return;
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
    return
  }

  const validKeys = Object.keys(requestFieldsOnDatabase);
  const { data } = req.body;
  const properties = Object.keys(req.body.data.properties)
    .filter(key => requiredPropertiesKeys.includes(key))
    .reduce((obj, key) => {
      obj[key] = req.body.data.properties[key];

      return obj;
    }, {})

  const definedData = validKeys
    .filter(key => {
      return data[key];
    })
    .reduce((obj, key) => {
      obj[key] = data[key];

      return obj;
    }, {});

  delete definedData.properties.images;

  const dbOffer = await db.offers.update({ where: { id: offerId }, data: definedData });

  const updatedOffer = await appendImages(user.id, dbOffer.id, properties);

  res.status(200).json({ message: "Success", data: updatedOffer });
});

module.exports = router;
