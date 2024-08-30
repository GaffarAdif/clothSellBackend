const mongoose = require('mongoose')

const ProdcutSchema = new mongoose.Schema({
    ProductId : {
        type : Number,
        required : true
    },
    ProductName : {
        type : String,
        required : true
    },
    ProductPrice : {
        type : Number,
        required : true
    },
    ProductStock : {
        type : Number,
        required : true
    },
    ProductSize : {
        type : Array,
        required : true
    },
    ProductColor : {
        type : Array,
        required : true
    },
    ProductImage : {
        type : String,
        required : true
    },



})

const Product = mongoose.model('Product', ProdcutSchema)

module.exports = Product
