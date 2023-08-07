const joi = require("joi");

module.exports = {
  logPayload: joi.object({
    username: joi.string().required().messages({
      "string.empty": "MISSING_FIELDS",
    }),
    password: joi.string().required().messages({
      "string.empty": "MISSING_FIELDS",
    }),
  }),

  validateToken: joi.string().required().messages({
    "string.empty": "INVALID_TOKEN",
  }),
};
