const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping-app');

const productSchema=new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    price: {
        type:Number,
        required:true,
        min:0
    },
    desc:{
        type:String,   
    },
    img:{
        type:String,
        default:'/dummyImage.jpg'
    }
});

const Product=mongoose.model('Product',productSchema);

module.exports=Product;

