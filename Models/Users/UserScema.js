const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    FullName : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required: true,
        unique: true
    },
    phoneNumber : {
        type : String,
        unique : true,
        required : true
    },
    Password : {
        type: String,
        required : true
    },
    ProfileIamge : String

}, {timestamps : true})

const User = mongoose.model('User', UsersSchema)

module.exports = User
