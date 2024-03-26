const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');
const authorization = require('../services/auth');

router.get( '/products', authorization, productController.getActiveProducts);

module.exports = router;