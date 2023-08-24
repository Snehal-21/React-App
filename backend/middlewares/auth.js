import User from "../models/user.js";
import bcrypt from "bcrypt";

export const registerChecks=async(req,res,next)=>{
    try {
        const {name,email,Password,confirmPassword}=req.body;
        if(!name) return res.status(400).json({status:400,success:false,message:"User name is required."});
        if(!email) return res.status(400).json({status:400,success:false,message:"User Email is required."});
        if(!Password) return res.status(400).json({status:400,success:false,message:"User password is required."});
        if(!confirmPassword) return res.status(400).json({status:400,success:false,message:"Confirm your password"});
        if(Password.length <5 || confirmPassword.length<5) return res.status(400).json({status:400,success:false,message:"password length should be greater than 5 digits"});
        if(Password != confirmPassword) return res.status(400).json({status:400,success:false,message:"Credentials should be equal"});
        next();
    } catch (error) {
        return res.status(400).json({status:400,success:false,message:"Internal server error"})
    }
}

export const loginChecks=async(req,res,next)=>{
    try {
        const {email,Password}=req.body;
        if(!email) return res.status(400).json({status:400,success:false,message:"User Email is required."});
        if(!Password) return res.status(400).json({status:400,success:false,message:"User password is required."});

        const checkUser=await User.findOne({email}).exec();
        if(!checkUser) return res.status(400).json({status:400,success:false,message:"User not found"});

        const decPass=await bcrypt.compare(Password,checkUser.Password);

        if(!decPass) return res.status(400).json({status:400,success:false,message:"Incorrect credentials"});
        next();
    } catch (error) {
        return res.status(400).json({status:400,success:false,message:"Internal server error"})
    }
}