import express from 'express';
const Router = express.Router();

import categoryController from '../controllers/categoryController.js';

Router.get('/', categoryController.getAllCategory);
Router.post('/', categoryController.addCategory);
Router.patch('/:id', categoryController.updateCategory);
Router.delete('/:id', categoryController.deleteCategory);

export const API_Category = Router;
