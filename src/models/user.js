'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /* Định danh các mối quan hệ */
        static associate(models) {

        }
    };
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            address: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            gender: DataTypes.BOOLEAN,
            image: DataTypes.STRING,
            roleId: DataTypes.STRING,
            positionId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};