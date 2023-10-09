import mongoose from "mongoose";

const orderStatusEnum = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: '',
    },
    totalPrice: {
        type: String, 
        require: true,
    },
    createDate: {
        type: Date, 
        require: true,
    },
    discount: {
        type: String, 
        require: true,
    },
    itemTotalPrice: {
        type: Number, 
        require: true,
    },
    shippingFee: {
        type: Number, 
        require: true,
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
