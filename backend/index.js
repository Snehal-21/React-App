import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/userRoutes.js";

const app=express();
dotenv.config();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use('/api',router);

mongoose.connect(process.env.MONGODB)
.then(()=>console.log("Db connected"))
.catch((err)=>console.log("DB error =>",err))

app.listen(process.env.PORT,()=>console.log(`working on PORT ${process.env.PORT}`));