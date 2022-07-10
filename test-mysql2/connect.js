const util = require('util')
const mysql = require('mysql')
const connection = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

connection.query = util.promisify(connection.query)

module.exports = connection;