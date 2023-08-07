const { string } = require("joi");
const { HTTPError, errorMessage } = require("../utils/errors/HTTPError");

const tokenValidation = (schema) => (req, res, next) => {
  let token = "authorization" in req.headers ? req.headers.authorization : "";
  token = token.replace(/^Bearer\s/, "");
  try {
    const { value, error } = schema.validate(token);
    if (error) {
      throw new HTTPError(error.message, 401);
    }
    next();
  } catch (err) {
    res.status(err.code).json({ message: "invalid token" });
  }
};

const bodyValidation = (schema) => (req, res, next) => {
  try {
    const { value, error } = schema.validate(req.body);
    if (error) {
      throw new HTTPError(error.message, 400);
    }
    req.body = value;
    next();
  } catch (err) {
    if (err instanceof HTTPError) {
      res.status(err.code).send(err.message);
    } else {
      res.status(500).send(err.message);
    }
  }
};

module.exports = { bodyValidation, tokenValidation };
