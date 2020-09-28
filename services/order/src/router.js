const router = require('express').Router();
const OrderController = require('./controller');

router.post('/', async (req, res) => {
  if (!req.body.userId || !req.body.productId) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }
  try {
    const id = await OrderController.create(req.body);
    return res.status(200).json({ id });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
});

router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    const orders = await OrderController.getOrdersAndProductDetailsOfUser(userId);
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

module.exports = router;
