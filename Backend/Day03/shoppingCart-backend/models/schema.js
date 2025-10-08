const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;