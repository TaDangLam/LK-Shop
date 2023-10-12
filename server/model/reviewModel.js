import mongoose, { Mongoose } from "mongoose";

const reviewSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
    },
    evaluete: {
        type: String,
    }
}, {
    timestamps: true
})

export const Review = mongoose.model('Review', reviewSchema);
