const express = require("express");
// var bodyParser = require('body-parser')
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// app.set('views', path.join(__dirname, '/yourViewDirectory'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shopping-app")
  .then(() => console.log(" DB connected"))
  .catch((err) => console.log(e));

app.engine("ejs", ejsMate);
app.use("/static", express.static(path.join(__dirname, "public")));
const port = "3000";

app.get("/", (req, res) => {
  res.send("hello there");
});

const productRoute = require("./routes/product");
app.use(productRoute);
app.listen(port, () => {
  // res.send("hello");

  console.log("server connected");
});
