'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /* Định danh các mối quan hệ */
        static associate(models) {

        }
    };
    History.init({
        patientId: DataTypes.INTEGER,
        doctorId: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        files: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};