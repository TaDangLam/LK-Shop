import express from 'express';
const Router = express.Router();

import blogController from '../controllers/blogController.js';

Router.get('/', blogController.getAllBlog);
Router.post('/', blogController.addBlog);
Router.get('/:id', blogController.getIdBlog);
Router.patch('/:id', blogController.updateBlog);
Router.delete('/:id', blogController.deleteBlog);

export const API_Blog = Router;
