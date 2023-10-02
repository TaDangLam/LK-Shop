import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    adminID: {type: mongoose.Types.ObjectId, ref: 'User'},
    
});

export const Admin = mongoose.model('Admin', adminSchema);
