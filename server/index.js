import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import cookieSession from 'cookie-session';
import diaryRoutes from './routes/diarys.js';
import userRoutes from './controllers/user.js'
import passport from 'passport';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({credentials: true, origin: 'https://eczema-forum.netlify.app/'}));

import session from 'express-session';


// after login, don't have to enter username and pw again
// ...so sessions
const sessionOptions = { 
  secret: 'secret for signing session id', 
  saveUninitialized: true, 
  resave: false,
  cookie: { Secure: true, SameSite: 'none' }
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
import './auth.js'

// app.use((req, res, next) => {
//   console.log('session contains', req.session);
//   next();
// });

app.use(function(req, res, next){
	res.locals.user = req.user;
	next();
});

// have middleware that deserializes the logged in user
// if req.session.user exists, then create property req.user that contains the user obj
// app.use(async (req, res, next) => {
//   console.log(req.session, ' is middleware req.session');
//   if(req.session.username) {
//     req.user = await User.findOne({username: req.session.username}).exec();
//   }
//   next();
// });


//For update pre-flight
// app.options('/diarys/:id', cors())
app.use('/diarys', diaryRoutes);
app.use('/users', userRoutes);

app.get('/',(req,res)=>{
  res.send('test Heroku')
})

const CONNECTION_URL = 'mongodb+srv://Blake:Blakehan2001@cluster0.tmcce.mongodb.net/eczema_forum?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`)))
  .catch((error) => console.log(`Error message(can't connect): ${error}`));
