const { verifyToken } = require("../helpers/crypto");
const { User } = require("../models");

exports.authentication = async (req, res, next) => {
  const { access_token } = req.headers;
  if (!access_token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const decoded = verifyToken(access_token);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};
