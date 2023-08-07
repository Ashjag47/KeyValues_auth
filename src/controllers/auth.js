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

const verifyToken = async (req, res) => {
  let token = "authorization" in req.headers ? req.headers.authorization : "";
  token = token.replace(/^Bearer\s/, "");
  try {
    const decoded = await authService.verifyToken(token);
    res.status(200).json({ ...decoded });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
