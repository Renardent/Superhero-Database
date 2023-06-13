'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Superpower.belongsToMany(models.Hero, {
        through: 'heroes_with_powers',
        foreignKey: 'superpowerId'
      });
    }
  }
  Superpower.init({
    name: {
      field: "name",
      type: DataTypes.STRING,
      allowNull:false,
        validate: {
          notEmpty: true,
          notNull: true
    }}
  }, {
    sequelize,
    modelName: 'Superpower',
    tableName:'superpowers',
    underscored: true,
    timestamps: false
  });
  return Superpower;
};