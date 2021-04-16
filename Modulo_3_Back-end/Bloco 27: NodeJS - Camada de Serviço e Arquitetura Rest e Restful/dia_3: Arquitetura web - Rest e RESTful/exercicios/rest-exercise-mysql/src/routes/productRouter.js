const express = require('express');
const errorMiddleware = require('../services/middlewares/errorMiddleware');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products', productController.getAll);
router.get('/products/:id', productController.getById);
router.post('/products', productController.add);
router.delete('/products/:id', productController.exclude);
router.put('/products/:id', productController.update);

router.use(errorMiddleware);

module.exports = router;
