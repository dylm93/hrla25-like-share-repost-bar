const Sequelize = require ('sequelize');
const mysql = require ('mysql');

const connection = new Sequelize ('songs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

connection
    .authenticate()
    .then( ()=> console.log('connected to mysql db'))
    .catch(err => console.error(err))

module.exports = connection;