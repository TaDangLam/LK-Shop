import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer'
    },
    items: [
        {
            productID: {type: mongoose.Types.ObjectId, ref: 'Product'},
            amount: {type: Number, require: true, min: 1},
        }
    ],
}, {
    timestamps: true
})

export const Cart = mongoose.model('Cart', cartSchema);
