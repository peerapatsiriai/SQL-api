const express = require('express')
const app = express.Router()
const register = require('../controller/post_register')

app.post('/register',register)

module.exports = app;
