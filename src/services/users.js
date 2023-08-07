const { User } = require("../../database/models");
const HTTPError = require("../utils/errors/HTTPError");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
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
    console.log("*****", err.errors[0].message, "*****");
    throw new HTTPError(err.message, 400);
  }
};

module.exports = {
  createUser,
};
