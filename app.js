const express = require('express');
const router = require('./src/routes/api');


const app = new express();

// Routes 
app.use('/api/v1', router);
// http://localhost:5000/api/v1/hello-post

// Undefined Route 
app.use('*', (req, res) => {
    res.status(404).json({status:"failed", data: "Not found"})
})

module.exports = app;