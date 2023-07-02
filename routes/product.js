const express = require('express')
//const {createProduct}  = require('.')
const {
    getProduct,
    
} = require('../controllers/productController')
const router = express.Router();

// router.route('/create').get(createProduct)
console.log('router loaded')

router.get('/',getProduct);


module.exports = router;