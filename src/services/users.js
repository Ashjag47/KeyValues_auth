const { User } = require("../../database/models");
const { HTTPError } = require("../utils/errors/HTTPError");
const bcrypt = require("bcryptjs");

const createUser = async (user) => {
  try {
    const { username, email, password, full_name, age, gender } = user;
    const hashedPassword = await bcrypt.hash(password, 12);
    const body = {
      username,
      email,
      password: hashedPassword,
      full_name,
      age,
      gender,
    };
    const newUser = await User.create(body);

    response = {
      status: "success",
      message: "User successfully registered!",
      data: {
        user_id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        full_name: newUser.full_name,
        age: newUser.age,
        gender: newUser.gender,
      },
    };
    return response;
  } catch (err) {
    throw new HTTPError(err.errors[0].message, 400);
  }
};

module.exports = {
  createUser,
};
