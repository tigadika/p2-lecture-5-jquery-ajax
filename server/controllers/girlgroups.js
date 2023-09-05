const { GirlGroup } = require("../models");

exports.getGirlGroupList = async (req, res) => {
  try {
    const girlgroups = await GirlGroup.findAll();
    res.status(200).json(girlgroups);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getGirlGroupById = async (req, res) => {
  try {
    const { id } = req.params;
    const girlgroups = await GirlGroup.findByPk(id);
    if (!girlgroups) {
      res.status(404).json({ message: "GirlGroup not found" });
      return;
    }
    res.status(200).json(girlgroups);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.addGirlGroup = async (req, res) => {
  try {
    const { name, company, imgUrl } = req.body;
    const girlgroups = await GirlGroup.create({ name, company, imgUrl });
    res.status(201).json({
      message: `GirlGroup with title ${girlgroups.name} has been created`,
      girlgroups,
    });
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

exports.deleteGirlGroupById = async (req, res) => {
  try {
    const { id } = req.params;
    const girlgroups = await GirlGroup.findByPk(id);
    if (!girlgroups) {
      res.status(404).json({ message: "GirlGroup not found" });
      return;
    }
    await girlgroups.destroy();
    res.status(200).json({ message: `GirlGroup id ${id} has been deleted` });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
