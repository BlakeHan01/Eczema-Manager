import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    user: {type: mongoose.ObjectId, required: true},
    
});

const User = mongoose.model('User', userSchema);
export default User;