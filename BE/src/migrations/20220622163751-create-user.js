'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      //id:DataTypes.STRING,
      //email:DataTypes.STRING,
      //firstName: DataTypes.STRING,
      //lastName: DataTypes.STRING,
      //email: DataTypes.STRING,
      //address:DataTypes.STRING,
      //gender:DataTypes.BOOLEAN,
      //roleid:DataTypes.STRING

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password:{
        allowNull:false,
        type:Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      gender: {
      allowNull: false,
        type: Sequelize.BOOLEAN
      },
      roleId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phonenumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      positionId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};