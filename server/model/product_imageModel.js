import mongoose from "mongoose";

const productImgSchema = new mongoose.Schema({
    // productID: {
    //     type: mongoose.Types.ObjectId,
    //     ref: '',
    // },
    url: {
        type: String,
        require: true,
    }
}, {
    timestamps: true
})

export const ProductImage = mongoose.model('ProductImage', productImgSchema);

