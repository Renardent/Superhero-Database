'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('heroes_with_powers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        heroId: {
          field: 'hero_Id',
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName:'heroes',
              key:'id'
            },
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
        superpowerId: {
          field: 'power_Id',
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName:'superpowers',
              key:'id'
            },
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
        imagePath: {
          field: 'image_path',
          type: Sequelize.TEXT
        }
      });
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes_with_powers');
  },
};
