const express=require('express');
const router=express.Router();

// router.use(express.urlencoded({ extended: true }));
router.use(express.urlencoded({
    extended: true
  }));
const Product=require('../models/product');
const Review = require('../models/review');
console.log("hum yaha aaye");

router.get('/products',async(req,res)=>{
    console.log("searched");
    // res.send("hello you are successfull");
    const allProducts=await Product.find();

    console.log(allProducts);
    res.render('products/index',{allProducts});
});
router.get('/products/new',(req,res)=>{
    // console.log("hello");
    // console.log(req.body);
    res.render('products/new');
});
router.post('/products',async(req,res)=>{
    console.log("hello hello ")
    console.log(req.body);
    let {name,price,desc,img}=req.body;
    await Product.insertMany({name,price,desc,img});
    console.log({name,price,desc,img});
    // console.log(name);
    // const allProducts=await Product.find();
    res.redirect('/products');
});

router.get('/products/:id',async(req,res)=>{
    // res.send("hello sir youre great");


    
    let {id}=req.params;
    let yeProd= await Product.findById(id).populate('reviews');
    // console.log(yeProd);
    // let allReviews=await yeProd.reviews.populate('reviews');
    res.render('products/show',{yeProd,id});
});

module.exports=router;