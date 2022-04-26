import mongoose from "mongoose";
import express from "express";

import Diary from "../models/diaryModel.js"
import User from "../models/userModel.js"

const router = express.Router();

export const getDiarys = async(req,res) => {
    const userId = req.params;
    try {
        const diarys = User.findById(userId).diarys;
        res.status(200).json(diarys);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getDiary = async(req, res) => {
    const {id} = req.params;
    try {
        const diary = await req.diary.findById(id);

        res.status(200).json(diary);
    } catch (error) {
        res.status(405).json({message: error.message})
    }
}

export const createDiary = async(req,res) => {
    
    const {skinQuality, sleepQuality, mood, allergens,activities,message} = req.body[0];
    const newDiary = new Diary({skinQuality, sleepQuality, mood, allergens,activities,message});
    try {
        await User.findOneAndUpdate(
            {username: req.body[1].username}, 
            {$push: {diarys: req.body[0]}}
          ).exec();
        res.status(201).json(newDiary);
    } catch (error) {
        res.status(403).json({message: error.message})
    }
}

export const deleteDiary = async(req,res) => {

}

export const updateDiary = async(req,res) => {
    const { skinQuality, sleepQuality, mood, allergens, activities, message} = req.body[0];
    const {id: diaryId} = req.params;
    const userId = req.body[1]._id;
    //new:true gives back object after the update
    const updatedDiary = new Diary({skinQuality, sleepQuality, mood, allergens, activities, message});
   
    const userTarget = await User.findOne({"_id": userId, "diarys._id": diaryId});

    // await User.findOneAndUpdate(
    //     {username: req.body[1].username}, 
    //     {$push: {diarys: updatedDiary}}
    //   ).exec();
    // console.log(diaryId, ' diary id');
    // const a = userTarget.diarys.map(e=> {
    //     console.log(e._id, ' is e id');

    //     if(diaryId === e._id.toString()){
    //         console.log('inside');
    //         return updatedDiary;
    //     } else{
    //         return e;
    //     }
    // })
    // console.log(a, ' updated');
    // console.log(updatedDiary);
    // userr.diarys.set({skinQuality: skinQuality, sleepQuality: sleepQuality, mood: mood,
    //              allergens: allergens, activities: activities, message: message});
    // const savedUser = await userr.save();
    const updated = await User.findOneAndUpdate(
        {username: req.body[1].username},
        {
            $set: {diarys: userTarget.diarys.map(e=> {
                if(diaryId === e._id.toString()){
                    return updatedDiary;
                } else{
                    return e;
                }
            })}
        }
    ).exec()
    // const user = User.find({username: req.body[1].username});
    // const a = await user.findOneAndUpdate(diaryId, updatedDiary, {returnOriginal: false}).exec();
    // console.log(a, ' is updated');
    // user.diarys.findByIdAndUpdate(id, updatedDiary, {returnOriginal: false});
    res.json(updatedDiary);
}

//had Router, r capitalized :(
export default router;