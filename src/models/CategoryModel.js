const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
},{timestamps:true,versionKey:false});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
