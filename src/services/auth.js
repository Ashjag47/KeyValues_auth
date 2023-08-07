const { HTTPError } = require("../utils/errors/HTTPError");
const { User } = require("../../database/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new HTTPError("INVALID_CREDENTIALS", 400);
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
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

const verifyToken = async (token) => {
  const decoded = jwt.verify(token, "secret");
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
};
