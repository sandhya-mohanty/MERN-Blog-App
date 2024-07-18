import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();


//mongodb database connection
mongoose.connect(process.env.MONGO_URI).then(() =>{
console.log('mongodb database connected');
}).catch((err)=>{
console.log(err)
})

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000,()=>{
  console.log('server running in port 3000 !!')
})
//router configuration
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes);

//error
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode ||500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({
    success :false,
    statusCode,
    message,
  });
})