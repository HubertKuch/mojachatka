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
    telephone: {
      type: "string",
      format: "telephone",
    },
    email: {
      type: "string",
    },
  },
  additionalProperties: true,
  required: [
    "password",
    "passwordRepeat",
    "firstName",
    "lastName",
    "telephone",
    "email",
  ],
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
      format: "telephone",
    },
    salesRepAltTelephone: {
      type: ["string", "null"],
      format: "telephone",
    },
    password: {
      type: "string",
    },
    passwordRepeat: {
      type: "string",
    },
  },
  additionalProperties: true,
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
      format: "telephone",
    },
    salesRepAltTelephone: {
      type: ["string", "null"],
      format: "telephone",
    },
    password: {
      type: "string",
    },
    passwordRepeat: {
      type: "string",
    },
  },
  additionalProperties: true,
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
    "password",
    "passwordRepeat",
  ],
};

const telephoneFormat = {
  telephone: (val) => {
    return new RegExp(
      /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/,
    ).test(val);
  },
};

const getIndividualUserSchema = () =>
  validator(INDIVIDUAL_USER_SCHEMA, {
    includeErrors: true,
    formats: { ...telephoneFormat },
  });

const getAgentUserSchema = () =>
  validator(AGENT_USER_SCHEMA, {
    includeErrors: true,
    formats: { ...telephoneFormat },
  });

const getDeveloperUserSchema = () =>
  validator(DEVELOPER_USER_SCHEMA, {
    includeErrors: true,
    formats: { ...telephoneFormat },
  });

module.exports = {
  getIndividualUserSchema,
  getAgentUserSchema,
  getDeveloperUserSchema,
  INDIVIDUAL_USER_SCHEMA,
  AGENT_USER_SCHEMA,
  DEVELOPER_USER_SCHEMA,
};
