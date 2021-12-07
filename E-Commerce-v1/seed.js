const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping-app');

const product=require('./models/product');
console.log(product);

const listOfProducts=[
    {
        name:"iPhone",
        price:200,
        desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Privacy built in. Wide camera. Retina display. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
        img:"https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w="
    },
    {
        name:"iPhone",
        price:200,
        desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Privacy built in. Wide camera. Retina display. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
        img:"https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w="
    },
    {
        name:"iPhone",
        price:200,
        desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Privacy built in. Wide camera. Retina display. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
        img:"https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w="
    },
    {
        name:"iPhone",
        price:200,
        desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Privacy built in. Wide camera. Retina display. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
        img:"https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w="
    },
    {
        name:"iPhone",
        price:200,
        desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Privacy built in. Wide camera. Retina display. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
        img:"https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w="
    }
];

async function seedDB()
{
    await product.deleteMany({});
    // for(let item of listOfProducts)
    // {
    //     await product.insertOne(item);
    // }
    await product.insertMany(listOfProducts);
    console.log("DB seeded");
}
seedDB();
