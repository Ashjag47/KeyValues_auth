const joi = require("joi");
const passPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*\\W)[a-zA-Z0-9\\S]{8,}$";

module.exports = {
  create: joi.object({
    username: joi.string().required().messages({
      "string.empty": "INVALID_REQUEST",
    }),

    email: joi.string().email().required().messages({
      "string.empty": "INVALID_REQUEST",
    }),

    password: joi.string().pattern(new RegExp(passPattern)).messages({
      "string.empty": "INVALID_REQUEST",
      "string.pattern.base": "INVALID_PASSWORD",
    }),

    full_name: joi.string().required().messages({
      "string.empty": "INVALID_REQUEST",
    }),

    age: joi.number().greater(1).required().messages({
      "number.base": "INVALID_AGE",
      "number.empty": "INVALID_REQUEST",
    }),

    gender: joi
      .string()
      .valid("male", "female", "non-binary)")
      .required()
      .messages({
        "string.empty": "INVALID_REQUEST",
      }),
  }),
};
