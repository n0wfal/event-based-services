const mongoose = require('mongoose');

const { Schema } = mongoose;

const Model = new Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', Model);

module.exports = User;
