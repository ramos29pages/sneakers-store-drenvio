const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specialPriceSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
    discount: { type: Number, required: true }
});

const SpecialPrice = mongoose.model('ramosdev-specialprices', specialPriceSchema);

module.exports = SpecialPrice;
