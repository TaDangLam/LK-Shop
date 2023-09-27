import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    totalPrice: {
        type: Number, 
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
        require: true,
    }
})

export const Order = mongoose.model('Order', orderSchema);

