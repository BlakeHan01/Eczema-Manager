import express from "express";
const router = express.Router();
import argon2 from "argon2"
import mongoose from 'mongoose';
import passport from 'passport';
const User = mongoose.model('User');


router.post('/Login', function(req,res,next) {
    passport.authenticate('local', function(err,user) {
      if(user) {
        req.logIn(user, function(err) {
            res.json(user);
        });
      } else {
        res.status(400).json({message: 'Your login or password is incorrect.'});
      }
    })(req, res, next);
  });

// router.post('/Login', async (req, res) => {
//     // res.header({'Access-Control-Allow-Credentials': true,
//     //         'Access-Control-Allow-Origin': 'http://localhost:3000',
//     //         'Access-Control-Allow-Headers': 'PATCH'});
//     res.header('Set-Cookie', req.session._id);
//   const {username, password} = req.body;
//   const user = await User.findOne({username: username}).exec();
//   console.log('LOGIN: existingUser', user);
//   if(user) {
//     // user.passwordr is from db, password is incoming pw
//     if(await argon2.verify(user.password, password)) {
//       // this creates our "authenticated" session
//       // "serializing" the user
//       req.session.username = user.username;
//       console.log(req.session,' is req.session');
//       res.json(user);
//     } else {
//         res.status(400).json({error: 'login failed'});
//     }
//   } else {
//     res.status(400).json({error: 'login failed'});
//   }
// });

// promise --> async task
// promise is resolved w/ some value
// async --> function is async
// await ... wait for a promise to be resolved... when it does resolve evaluate to the
// the resolved value

router.post('/Register', function(req, res) {
    User.register(new User({username:req.body.username}), 
        req.body.password, function(err, user){
      if (err) {
        res.status(400).json({error:'Your registration information is not valid'});
      } else {
        passport.authenticate('local')(req, res, function() {
            // console.log(user);
          res.json(user);
        });
      }
    });   
  });

// router.post('/Register', async (req, res) => {
//     res.header('Set-Cookie', req.session._id);
//     console.log(req.user, ' req.user');
//     // req.header({'Access-Control-Allow-Credentials': true,
//     //         'Access-Control-Allow-Origin': 'http://localhost:3000',
//     //         'Access-Control-Allow-Headers': 'PATCH'});
//     res.header('Set-Cookie', req.body._id);
//   const {username, password} = req.body;
//   console.log(username, password);
// //   console.log(username, password, 'is username password for register')
//   const existingUser = await User.findOne({username: username}).exec();
//   if(!existingUser) {
//     const hash = await argon2.hash(password);
//     const savedUser = await (new User({username, password: hash})).save();
//     res.json(savedUser);
//   } else {
//     res.status(400).json({error:'could not register'});
//   }
// });

export default router;