'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Markdown', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorId:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      clinicId:{
        allowNull:false,
        type:Sequelize.INTEGER 
      },
      specialtyId:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      contentHTML:{
        allowNull:false,
        type:Sequelize.STRING
      },
      contentMarkdown:{
        allowNull:false,
        type:Sequelize.STRING
      },
      description:{
        allowNull:false,
        type:Sequelize.TEXT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Markdown');
  }
};