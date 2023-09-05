'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GirlGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GirlGroup.init({
    name: DataTypes.STRING,
    imgUrl: DataTypes.TEXT,
    company: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'GirlGroup',
  });
  return GirlGroup;
};