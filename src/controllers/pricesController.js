const express = require('express');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const SpecialPrice = require('../models/SpecialPrice');
const Brand = require('../models/Brand');

exports.getSpecialPriceByUserAndProduct = async (req, res) => {
  try {
    const { user_id, nombre_producto } = req.params;
    console.log('USER:: ', user_id, ' - ', 'PRODUCT:: ', nombre_producto);
    const customer = await Customer.findOne({ identification: user_id });

    if (!customer) {
      return res.status(404).send({ message: 'Cliente no encontrado' });
    }

    const product = await Product.findOne({ name: nombre_producto, inStock: { $gt: 0 } });
    if (!product) {
      return res.status(404).send({ message: 'Producto no encontrado o sin stock' });
    }

    const specialPrice = await SpecialPrice.findOne({ customer: customer._id, brand: product.brand });

    const brand = await Brand.findOne({ _id : product.brand});

    let finalPrice;
    
    if (specialPrice) {
      finalPrice = product.basePrice - (product.basePrice * specialPrice.discount);
    } else {
      finalPrice = product.basePrice;
    }

    res.send({ finalPrice, customer, brand });

  } catch (error) {
    console.error('Ocurrió un error al obtener el precio del producto:', error);
    res.status(500).send({ message: 'Ocurrió un error al obtener el precio del producto.' });
  }
}
