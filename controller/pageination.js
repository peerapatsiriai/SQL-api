const DB = require('../connection/connect')

const pagination = async (req, res) => {
    const {page} = req.params
    const size = 10
    let max = page * size;
    let min = max - size;
    //const sql = `SELECT * FROM customer LIMIT ${min}, ${size}`
    const result = await DB.query(`SELECT * FROM customer LIMIT ${min}, ${size}`)
    res.status(200).json(result)
}


module.exports = pagination;