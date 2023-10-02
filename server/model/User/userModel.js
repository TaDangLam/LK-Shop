import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema ({
    name: {
        type: String, 
        require: true,
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
        require: false,
    },
    username: {
        type: String,
        require: true,
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
        required: true,
    },
    phone: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

export const User = mongoose.model('User', userSchema);
