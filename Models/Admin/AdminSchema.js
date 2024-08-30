const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    AdminSecretKey : {
        type : String,
        required : true
    },
})

const Admin = mongoose.model('Admin', UsersSchema)

module.exports = Admin
