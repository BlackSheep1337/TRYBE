'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const storesTable = await queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    
    return storesTable;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Stores');
  }
};
