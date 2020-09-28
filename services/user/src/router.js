const router = require('express').Router();
const UserController = require('./controller');

router.post('/', async (req, res) => {
  if (req.body.email && req.body.name) {
    try {
      const id = await UserController.create(req.body);
      return res.status(200).json(id);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: 'Something went wrong',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Name and email required',
    });
  }
});

module.exports = router;
