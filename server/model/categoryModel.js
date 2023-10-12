import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    properties: [{type: Object}],
}, {
    timestamps: true
})

export const Category = mongoose.model('Category', categorySchema);
