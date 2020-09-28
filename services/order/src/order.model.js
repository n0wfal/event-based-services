const mongoose = require('mongoose');

const { Schema } = mongoose;

const { ObjectId } = Schema;

const Model = new Schema({
  userId: ObjectId,
  productId: ObjectId,
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

Model.virtual('productDetails', {
  ref: 'Product',
  localField: 'productId',
  foreignField: 'product_id',
  justOne: true,
});

const model = mongoose.model('Order', Model);

module.exports = model;
