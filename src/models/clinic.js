'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        /* Định danh các mối quan hệ */
        static associate(models) {

        }
    };
    Clinic.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};