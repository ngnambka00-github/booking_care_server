'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Specialty extends Model {
        /* Định danh các mối quan hệ */
        static associate(models) {

        }
    };
    Specialty.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Specialty',
    });
    return Specialty;
};