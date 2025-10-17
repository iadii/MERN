const express = require("express");
const mongoose = require("mongoose");
const Cart = require("./models/schema");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.URI);

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {

  // console.log(`${now} - ${req.method} ${req.originalUrl} - ip: ${ip} - ua: ${ua} -${bodyPart}`);
  next();
});

app.get("/cart", async (req, res) => {
  const carts = await Cart.find();
  res.json(carts);
});

app.post("/cart", async (req, res) => {
  const { item, category, image, price } = req.body;
  await Cart.create({ item, category, image, price });
  res.status(201).json({
    msg: "Item added to cart",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
