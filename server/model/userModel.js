import mongoose from "mongoose";

const userEnum = ['admin', 'staff', 'customer'];

const userSchema = new mongoose.Schema ({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    birth: {
        type: Date
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: userEnum,
        default: 'customer',
    },
    phone: {
        type: String
    }   
}, {
    timestamps: true
})

export const User = mongoose.model('User', userSchema);
