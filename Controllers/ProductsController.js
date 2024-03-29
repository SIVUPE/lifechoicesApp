import express from 'express';
import bodyParser from "body-parser";
import { products } from '../model/index.js';


const productRouter = express.Router()


productRouter.get('/',(req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})
productRouter.get('/:id',(req, res)=>{
    try{
        products.fetchProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})
productRouter.post('/addProduct', bodyParser.json(), (req, res)=>{
    try{
        products .fetchProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new products'
        })
    }
})
export{
    productRouter
}