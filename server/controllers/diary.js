import mongoose from "mongoose";
import express from "express";

import Diary from "../models/diaryModel.js"
import User from "../models/userModel.js"

const router = express.Router();

export const getDiarys = async(req,res) => {
    try {
        const diarys = await req.user.diary.find();
        res.status(200).json(diarys);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getDiary = async(req, res) => {
    const {id} = req.params;
    try {
        const diary = await req.user.diary.findById(id);

        res.status(200).json(diary);
    } catch (error) {
        res.status(405).json({message: error.message})
    }
}

export const createDiary = async(req,res) => {
    const {skinQuality, sleepQuality, mood, allergens,activities,message} = req.body;
    const user = req.user;
    console.log(req.session, 'is session')
    // console.log(user, 'is user')
    const newDiary = new Diary({skinQuality, sleepQuality, mood, allergens,activities,message});
    try {
        // await newDiary.save();
        await user.diary.insertMany(newDiary);
        res.status(201).json(newDiary);
    } catch (error) {
        res.status(403).json({message: error.message})
    }
}

export const deleteDiary = async(req,res) => {

}

export const updateDiary = async(req,res) => {
    const { skinQuality, sleepQuality, mood, allergens, activities, message} = req.body;
    const {id} = req.params;
    const user = req.user;
    //new:true gives back object after the update
    const updatedDiary = {skinQuality, sleepQuality, mood, allergens, activities, message};
    const updated = await user.diary.findByIdAndUpdate(id, updatedDiary, {returnOriginal: false});
    res.json(updated);
}

//had Router, r capitalized :(
export default router;