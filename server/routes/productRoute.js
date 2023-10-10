import express from 'express';
const Router = express.Router();

import productController from '../controllers/productController.js';

Router.get('/', productController.getAllProduct);
Router.post('/', productController.addProduct);
Router.get('/:id', productController.getProductDetail);
Router.put('/:id');
Router.delete('/:id', productController.deleteProduct);


export const API_Product = Router;
