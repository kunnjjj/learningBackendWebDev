const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/product")
  .then(() => {
    console.log("running");
  })
  .catch((err) => {
    console.log("found an error", err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "jupiter", price: 66000 });
console.log(bike);
bike.save().then((res) => {
 console.log("saved");
  console.log(res);
});
