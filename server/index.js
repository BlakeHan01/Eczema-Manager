import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import diaryRoutes from './routes/diarys.js';
import userRoutes from './controllers/user.js'
const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
import session from 'express-session';

// after login, don't have to enter username and pw again
// ...so sessions
const sessionOptions = { 
  secret: 'secret for signing session id', 
  saveUninitialized: false, 
  resave: false 
};

app.use(session(sessionOptions));

app.use((req, res, next) => {
  console.log('session contains', req.session);
  next();
});

// have middleware that deserializes the logged in user
// if req.session.user exists, then create property req.user that contains the user obj
app.use(async (req, res, next) => {
  if(req.session.username) {
    req.user = await User.findOne({username: req.session.username}).exec();
  }
  next();
});

app.use('/diarys', diaryRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = 'mongodb+srv://Blake:Blakehan2001@cluster0.tmcce.mongodb.net/eczema_forum?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`)))
  .catch((error) => console.log(`Error message(can't connect): ${error}`));
