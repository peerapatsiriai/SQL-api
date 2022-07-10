const DB = require('../connection/connect')

const register = async (req,res) => {
    try {
        const {fname,lname,salary} = req.body
        await DB.query(`
        INSERT INTO customer (fname,lname,salary) VALUES (?,?,?)
        `,[fname,lname,salary])
        res.status(201).json('Success To Insert')
    } catch(err) {
        console.log(err);
        res.status(500).json('Some Thing Wrog')
    }
}

module.exports = register;