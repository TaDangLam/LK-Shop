import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    properties: [{type: Object}],
}, {
    timestamps: true
})

export const Category = mongoose.model('Category', categorySchema);
