const express = require('express')
const app = express.Router()
const getAllUsers = require('../controller/get_all_users')
const getUser = require('../controller/get_user')

app.get('/allusers',getAllUsers)
app.get('/user/:id',getUser)



module.exports = app;
