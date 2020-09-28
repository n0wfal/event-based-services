const mongoose = require('mongoose');

const { Schema } = mongoose;

const Model = new Schema({
  name: String,
  price: String,
  image: String,
});

const model = mongoose.model('Product', Model);

module.exports = model;
