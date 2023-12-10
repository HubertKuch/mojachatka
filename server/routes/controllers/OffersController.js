const { getOffers } = require('../../services/manageOffers')
const { postOffer } = require('../../services/manageOffers')
const { getUserByID } = require('../../services/getUsers')
const { isImage } = require('../../utils/isImage');
const { db } = require('../../utils/db');
const validateOfferImages = require('../../utils/validateOfferImages');
const { appendImages } = require('../../services/manageOffers');
const OffersService = require('../../services/OffersService');
const APIError = require('../../errors/APIError');
const { deleteFile } = require('../../utils/fileSystem');
const { validateHowManyImages } = require('../../utils/validateOfferImages');
const { OfferType } = require('@prisma/client');

class OffersController {
  static async getOffers(req, res) {
    const { page, boosted, user } = req.query

    const thePage = page || 1

    try {
      const offers = await getOffers(thePage, process.env.LIMIT_PER_PAGE, boosted, user)

      if (offers === "Server Error") {
        res.status(500).json({ message: "Internal Server Error" })
        return
      }


      res.status(200).json({ message: "Successfull", offers })


    } catch (err) {
      console.error(err)
      res.status(500).json({ message: "Internal Server Error" })
      return
    }
  }

  static async createOffer(req, res) {
    const { data } = req.body

    if (!data || data === {}) {
      res.status(400).json({ message: "Data must be provided" })
      return
    }

    try {
      if (!data.title || !data.description || !data.price || !data.region || !data.type || !data.sellType || !data.city || !data.properties) {
        res.status(400).json({ message: "Missing Values" })
        return
      }

      if (!Number.isInteger(data.price)) {
        res.status(400).json({ message: "The price must be a number" })
      }

      if (data.title === "" || data.description === "" || data.price === 0 || data.region === "" || data.type === "" || data.sellType === "" || data.city === "") {
        res.status(400).json({ message: "Values cannot be empty" })
        return
      }

      if (data.properties === {}) {
        res.status(400).json({ message: "You must provide properties" })
        return
      }

      // You must only allow following in the properties object:
      // Probably we need to have a list per type
      // bedrooms
      // rooms
      // area
      // ...
      // images (Array)
      // Anything else, reject

      const neededKeys = ['bedrooms', 'rooms'];

      const obj = data.properties;

      if (!neededKeys.every(key => Object.keys(obj).includes(key))) {
        res.status(400).json({ message: "Properties keys are invalid" })
        return
      }

      if (data.properties.bedrooms === null || data.properties.rooms === null) {
        res.status(400).json({ message: "Missing Properties Values" })
        return
      }

      if (!Number.isInteger(data.properties.bedrooms) || !Number.isInteger(data.properties.rooms)) {
        res.status(400).json({ message: "Properties values for the offer must be an Integer" })
        return
      }

      // Check if the image array isnt empty (must be at least 3 and maximum of 20)
      if (data.properties.images.length === 0) {
        res.status(400).json({ message: "You must provide at least 3 images" })
      }

      if (data.properties.images.length < 1) {
        res.status(400).json({ message: "You must provide at least 3 images" })
      }

      if (data.properties.images.length > 20) {
        res.status(400).json({ message: "You must provide less than 20 images" })
      }


      // Check if it's valid base64 String - done
      // Check if it's valid base64 Image - WiP
      // UPDATE: Still not safe

      // This will prevent user from sending empty string and base64 that does not have the image header

      const base64ImageArray = data.properties.images
      const base64ImageArrayLength = base64ImageArray.length

      for (let i = 0; i < base64ImageArrayLength; i++) {

        if (base64ImageArray[i] === "") {
          res.status(400).json({ message: "Image cannot be empty" })
        }

        const image = isImage(base64ImageArray[i])

        if (!image) {
          res.status(400).json({ message: "Image is invalid" })
          return;

        }
      }

      try {

        await getUserByID(req.payload.data.id)

      } catch (err) {
        res.status(400).json({ message: "User does not exist" })
      }

      const createOffer = await postOffer(data, req.payload.data.id)

      if (!createOffer || createOffer === false) {
        res.status(403).json({ message: "User does not have enough funds" })
        return
      }

      if (createOffer === "Server Error") {
        res.status(500).json({ message: "Could not create offer" })
        return
      }

      if (createOffer.code === "P2000" && createOffer.meta.column_name === 'title') {
        res.status(400).json({ message: "The title is too big" })
        return
      }

      if (createOffer.code === "P2000" && createOffer.meta.column_name === 'description') {
        res.status(400).json({ message: "The description is too big" })
        return
      }

      // We dont need to check that because user info is in the token and he cant edit it
      // However he might use api endpoint to overwrite that I Guess

      // if (createOffer === "Username does not not exist with this ID") {
      //     res.status(400).json({message: "Username does not not exist with this ID"})
      //     return
      // }

      if (createOffer === true) {
        res.status(200).json({ message: "Successfull", data: data })
      }

    } catch (err) {
      console.error(err)
      res.status(500).json({ message: "Internal Server Error" })
      return
    }
  }

  static async editOffer(req, res) {
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
  }

  static async getById(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return next(new APIError("Id must be provided", 400));
    }

    const offer = await OffersService.getById(id);

    if (!offer) {
      return next(new APIError("Offer not found", 404));
    }

    res.status(200).json(offer);
  }

  static async getUserOffers(req, res) {
    const { page } = req.query;
    const thePage = page || 1
    const user = req.payload.data;

    res.status(200).json(await OffersService.getUserOffers(user.id, thePage));
  }

  static async getOffersTypes(req, res) {
    res.status(200).json(Object.values(OfferType));
  }

  static async deleteImage(req, res) {
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

    return res.status(200).json({ message: "Successful", data: updatedOffer });

  }
}

module.exports = OffersController;

