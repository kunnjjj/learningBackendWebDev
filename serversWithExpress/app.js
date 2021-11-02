for (let i = 0; i < 10; i++) console.log(10);

const express = require("express");
const app = express();

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
// app.render("/views/cats");
app.get("/cats", (req, res) => {
  console.log("searched for cats");
  // res.send("searched cat");
  res.render("cats");
});
app.get("*",(req,res)=>{
    res.send("not found");
})
app.listen("3000", (req, res) => {
  console.log("hello");
});
