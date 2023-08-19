import User from "../models/user.js";
import bcrypt from "bcrypt";

export const register=async(req,res)=>{
    try {
        const {name,email,Password}=req.body;

        const existUser=await User.findOne({email}).exec();
        if(existUser) return res.status(400).json({status:400,message:"You are already registered."});

        const encPass=await bcrypt.hash(Password,10);

        const newUser=new User({
            name,
            email,
            Password:encPass
        });
        await newUser.save();
        return res.status(200).json({status:200,message:"User reqistered successfully."});
    } catch (error) {
        return res.status(400).json({status:400,message:"Internal server error"})
    }
}

export const login=async(req,res)=>{
    try {
        return res.status(200).json({status:200,message:"Logg in successful"})
    } catch (error) {
        return res.status(400).json({status:400,message:"Internal server error"})
    }
}