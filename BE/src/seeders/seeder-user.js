'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      return queryInterface.bulkInsert('Users', [{
        email:'admin@gmail.com',
        password:'123456',
        firstName: 'Nguyen',
        lastName: 'Thuong',
        address:'Bacgiang',
        gender:1,
        roleId:'R1',
        phonenumber:'0386013823',
        positionId:'professor',
        image:'Anhthuongdeptrai',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
