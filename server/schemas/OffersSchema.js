const { validator } = require("@exodus/schemasafe");

const { isImage } = require("../utils/isImage");
const { SellType, OfferType, Region } = require("@prisma/client");

const createOfferSchema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        title: {
          type: "string",
          minLength: 8,
        },
        description: {
          type: "string",
          minLength: 40,
        },
        price: {
          type: ["integer", "null"],
          minimum: 1,
        },
        pricePerMonth: {
          type: ["integer", "null"],
          minimum: 1,
        },
        type: {
          type: "string",
          enum: Object.values(OfferType),
        },
        sellType: {
          type: "string",
          enum: Object.values(SellType),
        },
        lat: {
          type: "number",
        },
        lng: {
          type: "number",
        },
        features: {
          type: "array",
          uniqueItems: true,
          items: [
            {
              type: "string",
            },
          ],
        },
        properties: {
          type: "object",
          properties: {
            bedrooms: { type: "integer" },
            rooms: { type: "integer" },
            region: {
              type: "string",
              enum: Object.values(Region),
            },
            sizeInMeters: { type: "integer" },
            city: { type: "string" },
            zipCode: { type: "string" },
            address: { type: "string" },
            houseNumber: { type: "string" },
            localNumber: { type: "string" },
            images: {
              type: "array",
              minItems: 1,
              maxItems: 20,
              items: [
                {
                  type: "string",
                  format: "base64",
                },
              ],
            },
          },
          required: [
            "sizeInMeters",
            "bedrooms",
            "rooms",
            "images",
            "region",
            "city",
            "address",
            "zipCode",
            "houseNumber",
          ],
        },
      },
      required: [
        "title",
        "description",
        "type",
        "sellType",
        "properties",
        "lat",
        "lng",
      ],
    },
  },
  required: ["data"],
};

const createOfferConfig = {
  formats: {
    base64: (el) => isImage(el),
  },
  includeErrors: true,
};

const getCreateOfferValidator = () =>
  validator(createOfferSchema, createOfferConfig);

module.exports = { getCreateOfferValidator };
