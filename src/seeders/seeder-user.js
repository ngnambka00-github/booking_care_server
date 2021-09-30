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

        return await queryInterface.bulkInsert('users', [{
            email: "ngnambka00@gmail.com",
            password: "dgsMUE35",
            firstName: "Nguyen Van",
            lastName: "Nam",
            address: "Hai Phong",
            phoneNumber: "0901599299",
            gender: 1,
            image: "",
            roleId: "ROLE",
            positionId: "R1",
            createdAt: new Date(),
            updatedAt: new Date(),
        }])
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
