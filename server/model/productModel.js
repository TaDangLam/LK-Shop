import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: String, 
        require: true,
    },
    amount: {
        type: Number, 
        require: true,
    },
    categories: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
    },
    productImg: {
        type: mongoose.Types.ObjectId,
        ref: 'ProductImage',
    }
}, {
    timestamps: true
})

export const Product = mongoose.model('Product', productSchema);

