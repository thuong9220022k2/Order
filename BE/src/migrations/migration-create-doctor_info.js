'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctor_info', {
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
      priceId:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      provinceId:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      paymentId:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      addressClinic:{
        allowNull:false,
        type:Sequelize.STRING
      },
      nameClinic:{
        allowNull:false,
        type:Sequelize.STRING
      },
      note:{
        allowNull:false,
        type:Sequelize.STRING
      },
      count:{
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
    await queryInterface.dropTable('Doctor_info');
  }
};