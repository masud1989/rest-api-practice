const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    name:String,
    model:String,
    quantity:{type:Number, default:5},
    price:{type:Number},
    ratings:String,
    image:String
},{versionKey:false})

const ProductsModel = mongoose.model('products',DataSchema);
module.exports = ProductsModel;