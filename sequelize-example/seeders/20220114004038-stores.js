'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert ('Stores', [
      {
        name: 'Magazine',
        description: 'Loja eletronica'
      },
      {
        name: 'Tendi tudo',
        description: 'Pode vir que aqui tem tudo',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Stores', null, {});
  }
};
