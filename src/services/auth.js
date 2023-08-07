const { HTTPError } = require("../utils/errors/HTTPError");
const { User } = require("../../database/models");
const jwt = require("jsonwebtoken");

const generateToken = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new HTTPError("INVALID_CREDENTIALS", 400);
  }
  if (user.password !== password) {
    throw new HTTPError("INVALID_CREDENTIALS", 400);
  }
  const token = jwt.sign({ username, password }, "secret", {
    expiresIn: "60m",
  });
  const response = {
    status: "success",
    message: "Access token generated successfully.",
    data: {
      access_token: token,
      expires_in: 3600,
    },
  };
  return response;
};

module.exports = {
  generateToken,
};
