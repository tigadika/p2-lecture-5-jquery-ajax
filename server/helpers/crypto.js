const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "secret";

const hashPassword = (password) => {
  return bcrypt.hashSync(password);
};

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const encodeToken = (data) => {
  return jwt.sign(data, SECRET_KEY);
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

module.exports = {
  hashPassword,
  comparePassword,
  encodeToken,
  verifyToken,
};
