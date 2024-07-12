const express = require('express');

const router = express.Router();

router.get('/products', (req, res) => {
    res.send('GET request to the homepage');
});

router.post('/products', (req, res) => {
    res.send('POST request to the homepage');
});

module.exports = router;