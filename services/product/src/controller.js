const ProductModel = require('./model');
const { sendMessage } = require('./event-handler');

const create = async ({ name, price, image }) => {
  const newProduct = new ProductModel({
    name,
    image,
    price,
  });
  try {
    await newProduct.save();
    await sendMessage(JSON.stringify(newProduct), 'product');
    return newProduct._id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  create,
};
