const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products', productController);
router.post('/products', productController);
router.put('/products/:id', productController);
router.delete('/:id', productController);

module.exports = router;