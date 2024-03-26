const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { type: String, required: true , lowercase: true },
  identification: { type: Number, required: true, unique : true}
});

module.exports = mongoose.model('ramosdev-customers', customerSchema);
