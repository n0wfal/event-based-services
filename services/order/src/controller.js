const OrderModel = require('./order.model');

const create = async ({ userId, productId }) => {
  const newOrder = new OrderModel({
    userId,
    productId,
  });
  await newOrder.save();
  return newOrder._id;
};

const getOrdersAndProductDetailsOfUser = async (userId) => {
  const data = await OrderModel.find({
    userId,
  })
    .lean()
    .select('-__v')
    .populate('productDetails', 'name image -_id -product_id');
  return data;
};

module.exports = {
  create,
  getOrdersAndProductDetailsOfUser,
};
