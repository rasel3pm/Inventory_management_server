const mongoose = require('mongoose');
const supplierSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
},{timestamps:true,versionKey:false});
const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;
