const mongoose = require('mongoose');
const brandSchema = new mongoose.Schema({
  userEmail: {
    type: String
  },
  name: {
    type: String,
    required: true,
  }
},{timestamps:true,versionKey:false});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
