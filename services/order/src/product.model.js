const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;
const Model = new Schema({
  product_id: ObjectId,
  name: String,
  image: String,
});

const model = mongoose.model('Product', Model);

module.exports = model;
