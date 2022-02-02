'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stores', [
      {
        name: "Magazine",
        description: 'Loja que tem eletros',
      },
      {
        name: 'TendiTudo',
        description: 'Pode vir que aqui tem tudo',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
