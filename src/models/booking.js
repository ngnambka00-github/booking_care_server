'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /* Định danh các mối quan hệ */
        static associate(models) {

        }
    };
    Booking.init({
        statusId: DataTypes.STRING,
        doctorId: DataTypes.INTEGER,
        patientId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};