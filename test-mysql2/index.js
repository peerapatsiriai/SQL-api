const express = require('express')
const app = express()

const connection = require('./connect')

app.get('/',async (req, res) => {
    try {
        const customer = await connection.query("SELECT * FROM customer");
        res.send(customer)
    } catch(err) {
        console.log(err);
        res.send('แตก')
    }
})


app.listen(3000)