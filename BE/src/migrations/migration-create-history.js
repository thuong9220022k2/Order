'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('History', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientId:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      doctorId:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      description:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      files:{
        allowNull:false,
        type:Sequelize.STRING
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
    await queryInterface.dropTable('History');
  }
};