import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import {diarySchema} from "./diaryModel.js"
const UserSchema = new mongoose.Schema({
    // username: {type: String, required: true, minLength: 3},
    // password: {type: String, required: true}, // hash + salt
    diarys: [diarySchema] 
  }) 
  UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema);
export default User;