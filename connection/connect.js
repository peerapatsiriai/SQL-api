const mysql = require('mysql')
const util = require('util')
// My SQL Connection
const connection = mysql.createConnection({
    host:"qz8si2yulh3i7gl3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"tlgk8ei2m22o7gmz",
    password:"lfn99tpoldn8owb1",
    database:"emg77eshsupxjdc8",
    port:"3306"
})

connection.query = util.promisify(connection.query)

module.exports = connection;