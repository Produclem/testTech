const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/products', async (req, res) => {
    const { name, type, price, rating, warranty_years } = req.body;
    if (!name || !type || !price || !rating || !warranty_years) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        return res.status(201).json({ message: 'Product created successfully' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json(updatedProduct);
    } catch (e) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (e) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;