const mongoose = require('mongoose');
const app = require('express')();

const { mongoUrl } = require('./config');
const router = require('./router');

app.use(require('body-parser').urlencoded({
  extended: true,
}));

app.use(router);

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}, (err) => {
  if (err) process.exit(1);
  console.log('Product db connected.');
  app.listen('3000', () => console.log('Product service started.'));
});
