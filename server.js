const express = require('express')
const app = express()

// Use express json
app.use(express.json())

// Use dot-env
require('dotenv').config();

const logger = require('morgan')
app.use(logger('dev'));

// Set Post Method
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended:true
}));

// Use Mysql AND Check Connect
const connection = require('./connection/connect')
connection.connect((err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Database Connected"); 
})

// Set All Route
const ROUTE_GET = require('./routes/get')
const ROUTE_POST = require('./routes/post')
const ROUTE_DELETE = require('./routes/delete')
app.use('/api',ROUTE_GET)
app.use('/api',ROUTE_POST)
app.use('/api',ROUTE_DELETE)

// Set Port
const port = process.env.PORT;
app.listen(port,(err) => {
    if(err) console.log(err);
    console.log(`Server Run ON Port: ${port}`);
})
