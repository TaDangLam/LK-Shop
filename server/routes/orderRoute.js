import express from 'express';
const Router = express.Router();

import orderController from '../controllers/orderController.js';

Router.get('/', orderController.getAllOrder);
Router.post('/', orderController.addOrder);
Router.get('/shipped', orderController.getAllShippedOrder);
Router.get('/delivered', orderController.getAllDeliveredOrder);
Router.get('/cancelled', orderController.getAllCancelledOrder);
Router.delete('/:id/delete', orderController.deleteOrder);
Router.patch('/:id/update', orderController.updateOrder);
Router.get('/:userID', orderController.getUserOrder);


export const API_Order = Router;