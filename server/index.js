import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import diaryRoutes from './routes/diarys.js';

const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/diarys', diaryRoutes);

app.get('/',(req,res)=>{
   res.send('hello ya');
})

const CONNECTION_URL = 'mongodb+srv://Blake:Blakehan2001@cluster0.tmcce.mongodb.net/eczema_forum?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`)))
  .catch((error) => console.log(`Error message(can't connect): ${error}`));
