const mongoose = require("mongoose");

const ProdcutSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  product_catagoris: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  product_stock: {
    type: Number,
    required: true,
  },
  product_size: {
    type: Array,
    required: true,
  },
  product_color: {
    type: Array,
    required: true,
  },
  product_image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", ProdcutSchema);

module.exports = Product;
