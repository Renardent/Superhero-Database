'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hero.belongsToMany(models.Superpower, {
        through: 'heroes_with_powers',
        foreignKey: 'heroId'
      });
    }
  }
  Hero.init({
    nickname: {
    field:'nickname',
    type: DataTypes.STRING,
    allowNull:false,
      validate: {
        notEmpty: true,
        notNull: true
  }},
    real_name:{
      field:'real_name',
      type: DataTypes.STRING,
      allowNull:false,
        validate: {
          notEmpty: true,
          notNull: true
    }},
    origin_description: {
      type: DataTypes.STRING,
    },
    phrase: {
    type: DataTypes.STRING
  }}, {
    sequelize,
    modelName: 'Hero',
    tableName:'heroes',
    underscored: true,
    timestamps: false
  });
  return Hero;
};