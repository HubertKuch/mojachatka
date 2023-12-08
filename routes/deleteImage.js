const { db } = require('../utils/db');
const { deleteFile } = require('../utils/fileSystem');
const { validateHowManyImages } = require('../utils/validateOfferImages');
const router = require('express').Router({ mergeParams: true });

router.delete('/', async (req, res) => {
  const user = req.payload.data;
  const offerId = req.params.offerId;
  const imgId = req.params.imgId;

  if (!offerId || !imgId) {
    return res.status(400).json({ message: 'Offer and img id must be specified' });
  }

  const offer = await db.offers.findFirst({ where: { id: req.params.offerId } });

  if (user.id !== offer.author) {
    return res.status(401).json({ message: 'You can not edit not your offer' });
  }

  const path = `${process.env.APP_MEDIA_PATH}/${user.id}/${offerId}/${imgId}.jpg`;
  const isDeleted = await deleteFile(path);

  if (!isDeleted) {
    return res.status(500).json({ message: 'Cannot remove a image' });
  }

  const props = offer.properties;
  props.images = props.images.filter(img => !img.endsWith(imgId + '.jpg'));

  try {
    validateHowManyImages(props.images);
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }

  const updatedOffer = await db.offers.update({ where: { id: offerId }, data: { properties: props } });

  return res.status(200).json({ message: "Successful", data: updatedOffer  });
});

module.exports = router;

