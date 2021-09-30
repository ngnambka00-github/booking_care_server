'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        /* Định danh các mối quan hệ */
        static associate(models) {

        }
    };
    Schedule.init({
        currentNumber: DataTypes.INTEGER,
        maxNumber: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        doctorId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};