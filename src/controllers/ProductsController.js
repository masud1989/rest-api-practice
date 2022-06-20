const ProductsModel = require("../models/ProductsModel");

exports.insertData = (req, res)=>{
    const reqBody = req.body;

    ProductsModel.create(reqBody, (err,data)=>{
        if(err){
            res.status(404).json({status:"failed", data:err})
        }
        else{
            res.status(201).json({status:"success", data:data})
        }
    })
}