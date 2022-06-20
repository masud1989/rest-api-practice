const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    name:String,
    model:String,
    quantity:String,
    price:String,
    ratings:String,
    image:String
})

const ProductsModel = mongoose.model('products',DataSchema);
module.exports = ProductsModel;