const { validator } = require("@exodus/schemasafe");
const { SocialMediaType } = require("@prisma/client");

const putSocialMediaSchema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    type: {
      type: "string",
      enum: Object.values(SocialMediaType),
    },
    link: {
      type: "string",
    },
  },
  required: ["type", "link"],
};

const getSocialMediaValidator = () =>
  validator(putSocialMediaSchema, { includeErrors: true });

module.exports = { getSocialMediaValidator };
