import mongoose from "mongoose";

const productImageSchema = new mongoose.Schema({
    productID: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
    },
    url: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export const ProductImage = mongoose.model('product_image', productImageSchema);
