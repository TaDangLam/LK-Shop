import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    staffID: {type: mongoose.Types.ObjectId, ref: 'User'},
    
});

export const Staff = mongoose.model('Staff', staffSchema);
