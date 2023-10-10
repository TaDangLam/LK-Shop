import mongoose, { Schema } from "mongoose";

const userEnum = ['admin', 'staff', 'customer'];

const userSchema = new mongoose.Schema ({
    name: {
        type: String, 
        required: true,
        minlength: 10,
        maxlength: 20,
    },
    email: {
        type: String,
        minlength: 10,
        maxlength: 20,
    },
    birth: {
        type: Date,
        required: false,
    },
    username: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 20,
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
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export const User = mongoose.model('User', userSchema);
