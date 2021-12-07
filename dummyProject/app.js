const mongoose = require("mongoose");
const express = require("express");
const app = express();

const seedDB=require('./seed');

// const path=require('path');
// console.log(path);
// app.set('view engine','ejs');
// app.set('views',path.join(__dirname("views")));
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// seedDB();

mongoose
  .connect("mongodb://localhost:27017/product")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));



app.get("/", (req, res) => {
  res.send("connected with mananvarshney");
});
// app.get("/products",(req,res)=>{
//     res.send("hello sir sjj  sj");
// })
// app.get('*',(req,res)=>{
//     res.send("somehting happeed");
// })
const productRoute=require("./routes/products");
// app.route(productRoute);
app.use(productRoute);
// console.log(productRoute);
app.listen(8081, (req, res) => {
  console.log("connect ed");
});
