const ProductsModel = require("../models/ProductsModel");

// Create Data 
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

//Read Data
exports.ReadData = (req, res) => {
    const query ={};
    const Projection = "name model quantity price"
    ProductsModel.find(query,Projection, (err,data)=>{
        if(err){
            res.status(404).json({status:"failed", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}

//Update Data
exports.UpdateProduct = (req,res)=>{
    const id = req.params.id;
    const query = {_id:id};
    const reqBody = req.body;

    ProductsModel.updateOne(query, reqBody, (err,data) =>{
        if(err){
            res.status(400).json({status:"failed", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}