const express = require('express');
const router = require('./src/routes/api');
const mongoose = require('mongoose')

const app = new express();

// Security Middleware Import 
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(rateLimit());
app.use(mongoSanitize());
app.use(hpp());

// Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15*60*1000, //15 minuites limit
    max: 100, //limit each IP to 100 Requests per windowMs
});
app.use(limiter);



//Database Connection starts
const uri = "mongodb://localhost:27017/shop";
const option = {user:'', pass:''};
mongoose.connect(uri, option, (error)=>{
    console.log('Connection Success');
    console.log('Error occured:'+' ' + error);
})
//Database Connection ends



// Routes 
app.use('/api/v1', router);
// http://localhost:5000/api/v1/hello-post

// Undefined Route 
app.use('*', (req, res) => {
    res.status(404).json({status:"failed", data: "Not found"})
})

module.exports = app;