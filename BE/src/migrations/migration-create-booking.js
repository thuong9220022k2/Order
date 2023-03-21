'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status:{
        allowNull:false,
        type:Sequelize.STRING
      },
      doctorId:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      patientId:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      date:{
        allowNull:false,
        type:Sequelize.DATE
      },
      timeType:{
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
    await queryInterface.dropTable('Booking');
  }
};