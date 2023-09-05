const { comparePassword, encodeToken } = require("../helpers/crypto");
const { User } = require("../models");

exports.register = async (req, res) => {
  try {
    //? 1. get dulu email dan password dari body
    const { email, password } = req.body;
    //? 2. validasi email dan password
    if (!email) {
      res.status(400).json({ message: "Email is required" });
      return;
    }
    if (!password) {
      res.status(400).json({ message: "Password is required" });
      return;
    }
    //? 3. kita create ke db
    const user = await User.create({ email, password });
    //? 4. jika sukses maka return dengan message
    res.status(201).json({
      message: `user with email ${user.email} has been created`,
    });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({
        message: err.message,
      });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

exports.login = async (req, res) => {
  try {
    //? 1. get dulu email dan password dari body
    const { email, password } = req.body;
    //? 2. validasi nullish email dan password
    if (!email) {
      throw { name: "EmailRequired" };
    }
    if (!password) {
      res.status(400).json({ message: "Password is required" });
      return;
    }

    //? 3. apakah email sudah terdaftar/belum
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ message: "Email/Password is wrong" });
      return;
    }

    //? 4. apakah password nya bener atau salah
    const isValidPassword = comparePassword(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ message: "Email/Password is wrong" });
      return;
    }

    //? 5. bikin access card buat dia
    const token = encodeToken({ id: user.id, email: user.email });

    //? 6. kirim response nya
    res.json({
      access_token: token,
    });
  } catch (err) {
    if (err.name === "EmailRequired") {
      res.status(400).json({ message: "Email is required" });
    }
  }
};
