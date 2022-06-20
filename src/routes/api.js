const express = require('express');
const { HelloGet, HelloPost } = require('../controllers/HelloController');
const { insertData, ReadData, UpdateProduct, DeleteProduct } = require('../controllers/ProductsController');
const router = express.Router();


// Routes 
router.get('/hello-get', HelloGet);
router.post('/hello-post', HelloPost);

router.post('/insert-product', insertData);
router.get('/products', ReadData);
router.post('/update/:id', UpdateProduct);
router.post('/update/:id', UpdateProduct);
router.get('/delete/:id', DeleteProduct);

module.exports = router;