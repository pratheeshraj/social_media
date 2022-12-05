 import express from 'express'
import dotenv from 'dotenv'
import userRouter from "./userRoute.js"
import mongoose from 'mongoose'

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
dotenv.config()


// //router
app.use('/api/users',userRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('DB is connected');
}).catch((err)=>{
console.log(err.message)
})

// //create port
 const port=process.env.PORT||5000


app.listen(port,()=>{
   console.log(`server runing in :http://localhost:${port}`);
 })