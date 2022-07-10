const DB = require('../connection/connect')

const getUer = async (req,res) => {
    try {
        const {id} = req.params

        const user = await DB.query(`SELECT * FROM customer WHERE id = ${id}`)
        res.send(user) 
    } catch(err) {
        console.log(err);
        res.status(500).json('Some Thing Wrog')
    }
}

module.exports = getUer;