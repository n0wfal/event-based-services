const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router');
const { mongoUrl } = require('./config');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(router);

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}, (err) => {
  if (err) process.exit(1);
  console.log('User db connected.');
  app.listen('3000', () => console.log('User service started.'));
});
