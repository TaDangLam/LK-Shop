import express from  'express';
const Router = express.Router();

import userController from '../controllers/userController.js';
import middlewareController from '../controllers/middlewareController.js';


Router.get('/', middlewareController.verifyToken, userController.getAllUser);
Router.post('/register', userController.registerUser);
Router.post('/login', userController.loginUser);
Router.get('/:id');
Router.patch('/:id');
Router.delete('/:id', userController.deleteUser);

export const API_User = Router;
