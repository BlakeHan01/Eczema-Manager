import mongoose from "mongoose";

export const diarySchema = mongoose.Schema({
    skinQuality: {type: String, required: true},
    sleepQuality: String,
    mood: String,
    allergens: String,
    activities: String,
    message: String,
    createdAt: {type: Date},
});

const Diary = mongoose.model('Diary', diarySchema);
export default Diary;