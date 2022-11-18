const mysql = require('mysql')
const util = require('util')
// My SQL Connection
const connection = mysql.createConnection({
    host:"",
    user:"",
    password:"",
    database:"",
    port:"3306"
})

connection.query = util.promisify(connection.query)

module.exports = connection;
