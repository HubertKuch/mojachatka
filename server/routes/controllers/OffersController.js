const { db } = require("../../utils/db");
const validateOfferImages = require("../../utils/validateOfferImages");
const { appendImages } = require("../../services/manageOffers");
const OffersService = require("../../services/OffersService");
const APIError = require("../../errors/APIError");
const { deleteFile } = require("../../utils/fileSystem");
const { validateHowManyImages } = require("../../utils/validateOfferImages");
const { OfferType, SellType, Region } = require("@prisma/client");
const {
  getCreateOfferValidator,
  createOfferSchema,
} = require("../../schemas/OffersSchema");
const OffersViewsService = require("../../services/OfferViewsService");
const populateJsonSchemaError = require("../../utils/populateJsonSchemaError");
const cities = require("../../data/cities.json");
const { normalizeToEn } = require("../../utils/normalizeChars");

class OffersController {
  static async findCities(req, res) {
    const chars = req.query.chars;

    if (!chars || chars.length <= 2) {
      return res.status(400).json({ message: "Znakow musi byc conajmniej 3" });
    }

    const matchedCities = cities.filter((city) =>
      normalizeToEn(city.toLowerCase()).startsWith(
        normalizeToEn(chars.toLowerCase()),
      ),
    );

    return res.status(200).json({ cities: matchedCities });
  }

  static async cityExists(req, res) {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({ message: "Miasto musi byc podane" });
    }

    const matched = cities.find(
      (c) =>
        normalizeToEn(c.toLowerCase()) === normalizeToEn(city.toLowerCase()),
    );

    return res.status(200).json({ exists: !!matched, city: matched });
  }

  static async getCategories(req, res) {
    const response = await Promise.all(
      Object.values(OfferType).map(
        async (category) => await OffersService.countByCategory(category),
      ),
    );

    res.status(200).json(response);
  }

  static async getRandom(req, res) {
    const offers = await OffersService.getRandomBoostedOffers(req.query.type);

    res.status(200).json(offers);
  }

  static async getOffers(req, res, next) {
    try {
      const offers = await OffersService.findAll(req.query);

      res.status(200).json({ message: "Successfull", offers });

      await OffersViewsService.viewed(req.clientIp, offers.data);
    } catch (err) {
      next(err);
    }
  }

  static async createOffer(req, res, next) {
    const data = req.body;
    const validate = getCreateOfferValidator();

    validate(data);

    if (validate.errors) {
      console.error(validate.errors);
      return next(
        new APIError(
          populateJsonSchemaError(createOfferSchema, validate.errors),
        ),
      );
    }

    if (!data.data.price && !data.data.pricePerMonth) {
      return next(new APIError("Price or price per month must be specified"));
    }

    try {
      const createOffer = await OffersService.createOffer(
        data.data,
        req.clientIp,
        req.payload.data.id,
      );

      res.status(200).json(createOffer);
    } catch (error) {
      return next(error);
    }
  }

  static async editOffer(req, res) {
    const offerId = req.params.offerId;

    if (!offerId) {
      res.status(400).json({ message: "Offer id must be specified" });
      return;
    }

    const offer = await db.offers.findFirst({
      where: { id: { equals: offerId } },
    });

    if (!offer) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }

    const user = req.payload.data;

    if (offer.author !== user.id) {
      res.status(401).json({ message: "You cannot edit not your offer" });
      return;
    }

    // title description price region type sellType city properties => {bedrooms, rooms, images}
    const requestFieldsOnDatabase = {
      title: "title",
      description: "description",
      price: "price",
      region: "region",
      type: "type",
      sellType: "sellType",
      city: "city",
      properties: "properties",
    };

    const requiredPropertiesKeys = ["images", "rooms", "bedrooms"];
    try {
      if (
        !validateOfferImages.validateOfferImages(
          req.body.data.properties.images,
        )
      ) {
        res.status(400).json({ message: "Invalid images" });
        return;
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const validKeys = Object.keys(requestFieldsOnDatabase);
    const { data } = req.body;
    const properties = Object.keys(req.body.data.properties)
      .filter((key) => requiredPropertiesKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = req.body.data.properties[key];

        return obj;
      }, {});

    const definedData = validKeys
      .filter((key) => {
        return data[key];
      })
      .reduce((obj, key) => {
        obj[key] = data[key];

        return obj;
      }, {});

    delete definedData.properties.images;

    const dbOffer = await db.offers.update({
      where: { id: offerId },
      data: definedData,
    });

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

    await OffersViewsService.viewed(req.clientIp, [offer]);
    res.status(200).json(offer);
  }

  static async getUserOffers(req, res) {
    const user = req.payload.data;

    res.status(200).json(await OffersService.getUserOffers(user.id, req.query));
  }

  static async getOffersTypes(req, res) {
    res.status(200).json(Object.values(OfferType));
  }

  static async getSellTypes(req, res) {
    res.status(200).json(Object.values(SellType));
  }

  static async getRegions(req, res) {
    res.status(200).json(Object.values(Region));
  }

  static async deleteImage(req, res) {
    const user = req.payload.data;
    const offerId = req.params.offerId;
    const imgId = req.params.imgId;

    if (!offerId || !imgId) {
      return res
        .status(400)
        .json({ message: "Offer and img id must be specified" });
    }

    const offer = await db.offers.findFirst({
      where: { id: req.params.offerId },
    });

    if (user.id !== offer.author) {
      return res
        .status(401)
        .json({ message: "You can not edit not your offer" });
    }

    const path = `${process.env.APP_MEDIA_PATH}/${user.id}/${offerId}/${imgId}.jpg`;
    const isDeleted = await deleteFile(path);

    if (!isDeleted) {
      return res.status(500).json({ message: "Cannot remove a image" });
    }

    const props = offer.properties;
    props.images = props.images.filter((img) => !img.endsWith(imgId + ".jpg"));

    try {
      validateHowManyImages(props.images);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }

    const updatedOffer = await db.offers.update({
      where: { id: offerId },
      data: { properties: props },
    });

    return res.status(200).json({ message: "Successful", data: updatedOffer });
  }
}

module.exports = OffersController;
