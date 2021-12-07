const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/product");

console.log(Product);
// console.log(Product.find({}));
// dummyProject\models\product.js
console.log("hello from product.js");

router.get("/products", async(req, res) => {
  console.log("started products page");
  const products=await Product.find({});
//   console.log(products);
        res.render("show",{products});
});

module.exports = router;
