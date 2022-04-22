import express from "express";
const router = express.Router();
import argon2 from "argon2"
import mongoose from 'mongoose';
const User = mongoose.model('User');

router.post('/Login', async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username: username}).exec();
  console.log('LOGIN: existingUser', user);
  if(user) {
    // user.passwordr is from db, password is incoming pw
    if(await argon2.verify(user.password, password)) {
      // this creates our "authenticated" session
      // "serializing" the user
      req.session.username = user.username;
      res.json(user);
    } else {
        res.json({error: 'login failed'})
    }
  } else {
    res.json({error: 'login failed'})
  }
});

// promise --> async task
// promise is resolved w/ some value
// async --> function is async
// await ... wait for a promise to be resolved... when it does resolve evaluate to the
// the resolved value


router.post('/Register', async (req, res) => {
  const {username, password} = req.body;
  console.log(username, password);
//   console.log(username, password, 'is username password for register')
  const existingUser = await User.findOne({username: username}).exec();
  if(!existingUser) {
    const hash = await argon2.hash(password);
    const savedUser = await (new User({username, password: hash})).save();
    res.json(savedUser);
  } else {
    res.status(400).json({error:'could not register'});
  }
});

export default router;