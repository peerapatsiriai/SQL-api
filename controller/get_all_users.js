const { Logger } = require('logger')
const DB = require('../connection/connect')

const getAll = async (req,res) => {
    try {
        const users = await DB.query('SELECT * FROM customer')
        res.status(200).json(users)
    } catch(err) {
        console.log(err);
        res.status(400).json('Some Thing Wrog')
    }
}

module.exports = getAll;