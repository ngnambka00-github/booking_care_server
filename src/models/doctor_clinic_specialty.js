'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Doctor_Clinic_Specialty extends Model {
        /* Định danh các mối quan hệ */
        static associate(models) {

        }
    };
    Doctor_Clinic_Specialty.init({
        doctorId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,
        specialtyId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Doctor_Clinic_Specialty',
    });
    return Doctor_Clinic_Specialty;
};