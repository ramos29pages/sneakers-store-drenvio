const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    inStock: { type: Number, required: true },
    basePrice: { type: Number, required: true },
    brand: { type: Schema.Types.ObjectId || String, ref: 'Brand', required: true }
});

module.exports = mongoose.model('ramosdev-products', productSchema);
