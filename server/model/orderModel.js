import mongoose from "mongoose";

const orderStatusEnum = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    totalPrice: {
        type: String, 
        required: true,
    },
    createDate: {
        type: Date, 
        required: true,
    },
    discount: {
        type: String, 
        required: true,
    },
    itemTotalPrice: {
        type: Number, 
        required: true,
    },
    shippingFee: {
        type: Number, 
        required: true,
    },
    status: {
        type: String,
        enum: orderStatusEnum,
        default: 'Pending',
    },
    items: [
        {
            product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
            amount: {type: Number, required: true, min: 1}, 
        }
    ],
    paymentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
    },
}, {
    timestamps: true
})

export const Order = mongoose.model('Order', orderSchema);
