import { Sequelize } from 'sequelize';

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('healthy_care', 'root', 'dgsMUE35', {
    host: 'localhost',
    dialect: 'mysql'
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;