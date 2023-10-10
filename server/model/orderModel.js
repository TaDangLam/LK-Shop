import mongoose from "mongoose";

const orderStatusEnum = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
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
            product: {type: mongoose.Types.ObjectId, ref: 'Product'},
            amount: {type: Number, require: true, min: 1}, 
        }
    ],
    paymentID: {
        type: mongoose.Types.ObjectId,
        ref: 'Payment',
    },
}, {
    timestamps: true
})

export const Order = mongoose.model('Order', orderSchema);
