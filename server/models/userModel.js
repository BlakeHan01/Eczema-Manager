import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    user: {type: mongoose.ObjectId, required: true},
    
});

export default userSchema;