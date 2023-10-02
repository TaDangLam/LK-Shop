import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    customerID: {type: mongoose.Types.ObjectId, ref: 'Customer'}
}, {
    timestamps: true
})

export const Cart = mongoose.model('Cart', cartSchema);

