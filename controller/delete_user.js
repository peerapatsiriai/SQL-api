const DB = require('../connection/connect')

const deleteUser = async (req,res) => {
    try {
        const {id} = req.body
        await DB.query(`DELETE FROM customer WHERE id = ${id}`)
        res.send('This user deleted') 
    } catch(err) {
        console.log(err);
        res.status(500).json('Some Thing Wrog')
    }
}

module.exports = deleteUser;