const express = require('express')
const app = express.Router()
const deleteUser = require('../controller/delete_user')

app.delete('/deleteuser',deleteUser)

module.exports = app;
