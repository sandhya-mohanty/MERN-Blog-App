import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


//mongodb database connection
mongoose.connect(process.env.MONGO_URI).then(() =>{
console.log('mongodb database connected');
}).catch((err)=>{
console.log(err)
})

const app = express();

app.listen(3000,()=>{
  console.log('server running in port 3000 !!')
})