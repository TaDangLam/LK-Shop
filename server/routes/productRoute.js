import express from 'express';
const Router = express.Router();

import productController from '../controllers/productController.js';

Router.get('/', productController.getAllProduct);
Router.post('/')



export const API_Product = Router;
