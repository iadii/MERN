const express = require('express');
const mongoose = require('mongoose');
const Cart = require('./models/schema');
const app = express();
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.get('/cart', async(req, res) => {
    const carts = await Cart.find();
    res.json(carts);
});

app.post('/cart', async(req, res) => {
    const {item, category, price} = req.body;
    await Cart.create({item, category, price});
    res.status(201).json({
      msg: 'Item added to cart'
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});