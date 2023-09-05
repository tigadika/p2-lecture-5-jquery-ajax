"use strict";

const { hashPassword } = require("../helpers/crypto");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const girlgroups = require("./girlgroups.json");
    girlgroups.forEach((el) => {
      delete el.id;
    });
    const users = require("./users.json");
    users.forEach((user) => {
      user.password = hashPassword(user.password);
    });

    await queryInterface.bulkInsert("Users", users, {});
    await queryInterface.bulkInsert("GirlGroups", girlgroups, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GirlGroups", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
