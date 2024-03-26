
const Product = require('../models/Product');

exports.getActiveProducts = async (req, res) => { 
  try {
    console.log('Token:', req.token); 
    const Products = await Product.find({ inStock: { $gt: 0 } });
    res.send(Products);
  } catch (error) {
    console.error('Ocurrió un error al obtener los Productos:', error);
    res.status(500).send('Ocurrió un error al obtener los Productos.');
  }
};



