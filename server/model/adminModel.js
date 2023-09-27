import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true,
    },
    avatar: {
        type: String, 
        require: true,
    },
    price: {
        type: Number, 
        require: true,
    },
    description: {
        type: String, 
        require: true,
    },
    amount: {
        type: Number, 
        require: true,
    },
    category: {
        type: String, 
        require: true,
    }
})

export const Product = mongoose.model('Product', productSchema);

