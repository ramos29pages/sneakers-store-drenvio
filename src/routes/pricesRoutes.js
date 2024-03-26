const express = require('express');
const router = express.Router();
const pricesController = require('../controllers/pricesController');
const authorization = require('../services/auth');

router.get( '/prices/:user_id/:nombre_producto', authorization, pricesController.getSpecialPriceByUserAndProduct);

module.exports = router;