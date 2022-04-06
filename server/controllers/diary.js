import mongoose from "mongoose";
import express from "express";

import Diary from "../models/diaryModel.js"
import User from "../models/userModel.js"

const router = express.Router();

export const getDiarys = async(req,res) => {
    try {
        const diarys = await Diary.find();

        res.status(200).json(diarys);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getDiary = async(req, res) => {
    
}

export const createDiary = async(req,res) => {
    const {skinQuality, sleepQuality, mood, allergens,activities,message} = req.body;

    const newDiary = new Diary({skinQuality, sleepQuality, mood, allergens,activities,message});
    try {
        await newDiary.save();
        res.status(201).json(newDiary);
    } catch (error) {
        res.status(403).json({message: error.message})
    }
}

export const deleteDiary = async(req,res) => {

}

export const updateDiary = async(req,res) => {

}


//had Router, r capitalized :(
export default router;