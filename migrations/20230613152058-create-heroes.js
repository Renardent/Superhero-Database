'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        field:'nickname',
        allowNull:false,
        type: Sequelize.STRING
      },
      real_name: {
        field:'real_name',
        allowNull:false,
        type: Sequelize.STRING
      },
      origin_description: {
        type: Sequelize.STRING
      },
      phrase: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes');
  }
};