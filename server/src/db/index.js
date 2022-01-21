const { Sequelize } = require('sequelize');
const { development } = require('../config/config');

const sequelize = new Sequelize(development.database, development.username, development.password, {
    host: development.host,
    dialect: development.dialect,
    dialectOptions: {
        socketPath: development.dialectOptions.socketPath
    }
});

sequelize.authenticate().then(
    console.log('Connection has been established successfully.')).catch(error => (
        console.error('Unable to connect to the database:', error)));


module.exports = sequelize