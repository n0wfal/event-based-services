const mongoose = require('mongoose');
const app = require('express')();
const { productConsumer } = require('./event-handler');

const { mongoUrl } = require('./config.js');
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
}, async (err) => {
  if (err) process.exit(1);
  console.log('Orders db connected.');
  try {
    await productConsumer();
    app.listen('3000', () => console.log('Orders service started.'));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
