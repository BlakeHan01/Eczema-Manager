import mongoose from "mongoose";

const diarySchema = mongoose.Schema({
    skinQuality: {type: String, required: true},
    sleepQuality: String,
    mood: String,
    allergens: String,
    activities: String,
    message: String,
    createdAt: {type: Date},
});

export default diarySchema;