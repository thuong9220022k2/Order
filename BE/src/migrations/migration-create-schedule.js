'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      currentNumber:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      maxNumber:{
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
      doctorId:{
        allowNull:false,
        type:Sequelize.INTEGER
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
    await queryInterface.dropTable('Schedule');
  }
};