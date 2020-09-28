const router = require('express').Router();
const ProductController = require('./controller');

router.post('/', async (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.image) {
    return res.status(400).json({
      message: 'Invalid data',
    });
  }

  try {
    const id = await ProductController.create(req.body);
    return res.status(200).json({ id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
      message: 'Something went wrong',
    });
  }
});

module.exports = router;
