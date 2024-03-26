const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  name: { type: String, required: true, unique: true, lowercase: true }
});

module.exports = mongoose.model('ramosdev-brands', brandSchema);
