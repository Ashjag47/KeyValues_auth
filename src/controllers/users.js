const usersService = require("../services/users");

const createUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await usersService.createUser(user);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(err.code).json({ message: err.message });
  }
};

module.exports = {
  createUser,
};
