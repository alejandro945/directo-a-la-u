const fs = require('fs');
const { dev } = require('./index')
module.exports = {
  development: {
    dialect: dev.dialect,
    username: dev.username,
    password: dev.password,
    port: 3306,
    database: dev.database,
    host: dev.host,
    dialectOptions: {
      socketPath: dev.socketPath
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '',
    port: 3306,
    dialect: '',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: process.env.DB_DIALECT,
  }
};