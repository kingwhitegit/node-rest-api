'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstname: 'John',
      lastname: 'smith',
      ps: 'password',
    }], {
      firstname: 'John2',
      lastname: 'smith2',
      ps: 'password',      
    });
  },fdsafdsa

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
