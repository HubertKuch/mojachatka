const { validator } = require("@exodus/schemasafe");

const INDIVIDUAL_USER_SCHEMA = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    password: {
      type: "string",
    },
    passwordRepeat: {
      type: "string",
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
    },
  },
  required: ["password", "passwordRepeat", "firstName", "lastName", "email"],
};

const AGENT_USER_SCHEMA = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    companyName: {
      type: "string",
    },
    license: {
      type: "string",
    },
    regon: {
      type: "string",
    },
    nip: {
      type: "string",
    },
    address: {
      type: "string",
    },
    house: {
      type: "string",
    },
    zipCode: {
      type: "string",
    },
    city: {
      type: "string",
    },
    salesRepFirstName: {
      type: "string",
    },
    salesRepLastName: {
      type: "string",
    },
    salesRepTelephone: {
      type: "string",
    },
    salesRepAltTelephone: {
      type: "string",
    },
    password: {
      type: "string",
    },
    passwordRepeat: {
      type: "string",
    },
  },
  additionalProperties: false,
  required: [
    "companyName",
    "license",
    "regon",
    "nip",
    "address",
    "house",
    "zipCode",
    "city",
    "salesRepFirstName",
    "salesRepLastName",
    "salesRepTelephone",
    "salesRepAltTelephone",
    "password",
    "passwordRepeat",
  ],
};

const DEVELOPER_USER_SCHEMA = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    companyName: {
      type: "string",
    },
    license: {
      type: "string",
    },
    regon: {
      type: "string",
    },
    nip: {
      type: "string",
    },
    address: {
      type: "string",
    },
    house: {
      type: "string",
    },
    zipCode: {
      type: "string",
    },
    city: {
      type: "string",
    },
    salesRepFirstName: {
      type: "string",
    },
    salesRepLastName: {
      type: "string",
    },
    salesRepTelephone: {
      type: "string",
    },
    salesRepAltTelephone: {
      type: "string",
    },
    password: {
      type: "string",
    },
    passwordRepeat: {
      type: "string",
    },
  },
  additionalProperties: false,
  required: [
    "companyName",
    "license",
    "regon",
    "nip",
    "address",
    "house",
    "zipCode",
    "city",
    "salesRepFirstName",
    "salesRepLastName",
    "salesRepTelephone",
    "salesRepAltTelephone",
    "password",
    "passwordRepeat",
  ],
};

const getIndividualUserSchema = () =>
  validator(INDIVIDUAL_USER_SCHEMA, { includeErrors: true });

const getAgentUserSchema = () =>
  validator(AGENT_USER_SCHEMA, { includeErrors: true });

const getDeveloperUserSchema = () =>
  validator(DEVELOPER_USER_SCHEMA, { includeErrors: true });

module.exports = {
  getIndividualUserSchema,
  getAgentUserSchema,
  getDeveloperUserSchema,
};
