const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  brandID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
},{timestamps:true,versionKey:false});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
