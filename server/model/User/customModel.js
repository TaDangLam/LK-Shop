import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    customerID: {type: mongoose.Types.ObjectId, ref: 'User'},
    
});

export const Customer = mongoose.model('Customer', customerSchema);
