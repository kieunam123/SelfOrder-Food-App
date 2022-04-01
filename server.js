const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const data = require('./data');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const Product = mongoose.model(
    'product',
    new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    khuyenmai: String,
    category: String,
}));

app.get('/api/products/seed',async(req,res)=>{
    const products = await Product.insertMany(data.products);
    res.send({products});
})

app.get('/api/categories', (req, res)=> {
    res.send(data.categories);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`sử dụng port : http://localhost:${port} `)
})