const express=require("express");
const router=express.Router();
// const mongoose=require('mongoose');


const Product=require('../models/product');
const Review=require('../models/review');
console.log("review route used");
router.use(express.urlencoded({
    extended: true
  }));
router.post('/products/:id',async(req,res)=>{
    console.log("hello");
    const {text}=req.body;
    console.log(text);
    const {id}=req.params;
    let product=await Product.findById(id);
    let review= await new Review({comment:text});
    await review.save();
    // await Review.insertMany([{text}]);
    product.reviews.push(review);

    // await review.save();
    await product.save();

    res.redirect(`/products/${id}`);
}); 



module.exports=router;