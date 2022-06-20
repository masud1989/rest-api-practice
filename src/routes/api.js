const express = require('express');
const { HelloGet, HelloPost } = require('../controllers/HelloController');
const { insertData } = require('../controllers/ProductsController');
const router = express.Router();


// Routes 
router.get('/hello-get', HelloGet);
router.post('/hello-post', HelloPost);

router.post('/insert-product', insertData)

module.exports = router;