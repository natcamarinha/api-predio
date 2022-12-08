'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Residents', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      nome: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      modelo_carro: {
        type: Sequelize.STRING
      },
      cor_carro: {
        type: Sequelize.STRING
      },
      placa: {
        type: Sequelize.STRING
      },
      bloco_apto: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Residents');
  }
};