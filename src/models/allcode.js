'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /* Định danh các mối quan hệ */
        static associate(models) {

        }
    };
    Allcode.init({
        key: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};