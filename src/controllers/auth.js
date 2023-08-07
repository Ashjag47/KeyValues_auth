const authService = require("../services/auth");

const generateToken = async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await authService.generateToken(username, password);
    res.status(200).json(token);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = {
  generateToken,
};
