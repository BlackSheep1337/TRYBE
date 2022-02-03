'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Stores', [
      {
        name:'Magazine',
        description: 'Loja que tem eletro.',
      },
      {
        name: 'Tem de tudo',
        description: 'Pode vir que aqui tem tudo.',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Stores', null, {});
  }
};
