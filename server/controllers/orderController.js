import { StatusCodes } from 'http-status-codes';

import { Order } from '../model/orderModel.js';

const orderController = {
    // GET ALL Order
    getAllOrder: async(req, res) => {
        try{
            const order = await Order.find();
            res.status(StatusCodes.OK).json(order);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    getAllShippedOrder: async(req, res) => {
        try{
            const order = await Order.find()
                .where('status').equals("Shipped");
            res.status(StatusCodes.OK).json(order);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    getAllDeliveredOrder: async(req, res) => {
        try{
            const order = await Order.find()
                .where('status').equals("Delivered");
            res.status(StatusCodes.OK).json(order);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    getAllCancelledOrder: async(req, res) => {
        try{
            const order = await Order.find()
                .where('status').equals("Canceled");
            res.status(StatusCodes.OK).json(order);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    //  GET ALL Order contains UserID
    getUserOrder: async(req, res) => {
        try{
            const userID = req.params.userID;  
            const orderDoc = await Order.find()
                .where('userID').equals(userID)
            res.status(StatusCodes.OK).json(orderDoc);
        }catch (err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    addOrder: async(req, res) => {
        try {
            const {userID, totalPrice, createDate, discount, itemTotalPrice, shippingFee, status, items} = req.body;
            const orderDoc = await Order.create({
                userID, totalPrice, createDate, discount, itemTotalPrice, shippingFee, status, 
                items: items || []
            });
            res.status(StatusCodes.CREATED).json(orderDoc);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    deleteOrder: async(req, res) => {
        const orderID = req.params.id;
        try{
            await Order.findByIdAndDelete(orderID);
            res.status(StatusCodes.OK).json("Order Delete Success");
        }catch(err){
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    updateOrder: async(req, res) => {
        const orderID = req.params.id;
        try{
            const {userID, totalPrice, createDate, discount, itemTotalPrice, shippingFee, status, items} = req.body;
            await Order.findByIdAndUpdate(orderID,{
                userID: userID,
                totalPrice: totalPrice,
                itemTotalPrice: itemTotalPrice,
                createDate: createDate,
                discount: discount,
                shippingFee: shippingFee,
                status: status,
                items: items || []
            });
            res.status(StatusCodes.OK).json("Order Updated Success");
        }catch(err){
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
}

export default orderController;