const mongoose = require('mongoose');

mongoose.connect(process.env.URI);
const cartSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
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