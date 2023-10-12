import express from 'express';
const Router = express.Router();

import productController from '../controllers/productController.js';

Router.get('/', productController.getAllProduct);
Router.post('/', productController.addProduct);

Router.get('/search/:key', productController.searchProduct);
Router.get('/:id', productController.getProductDetail);
Router.patch('/:id', productController.updateProduct);
Router.delete('/:id', productController.deleteProduct);


export const API_Product = Router;
