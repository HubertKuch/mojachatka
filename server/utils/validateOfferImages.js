const { isImage } = require('./isImage');

function validateOfferImages(imgs) {
  const isAllBase64 = imgs.every(img => isImage(img));

  if (!isAllBase64) {
    throw new Error("Some image is invalid, check them");
  }

  validateHowManyImages(imgs);

  return true;
}

function validateHowManyImages(imgs) {
  if (imgs.length < process.env.IMAGES_MIN || imgs.length > process.env.IMAGES_LIMIT) {
    throw new Error(`You must provide between ${process.env.IMAGES_MIN} and ${process.env.IMAGES_LIMIT}`);
  }
}

module.exports = { validateOfferImages, validateHowManyImages };
