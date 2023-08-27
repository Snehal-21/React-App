import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
    try {
        const { name, email, Password } = req.body;

        const existUser = await User.findOne({ email }).exec();
        if (existUser) return res.status(403).json({ status: 403, success: false, message: "You are already registered." });

        const encPass = await bcrypt.hash(Password, 10);

        const newUser = new User({
            name,
            email,
            Password: encPass
        });
        await newUser.save();
        return res.status(200).json({ status: 200, success: true, message: "User reqistered successfully." });
    } catch (error) {
        return res.status(400).json({ status: 400, success: false, message: "Internal server error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email } = req.body;
        const CheckUser = await User.findOne({ email }).exec();
        if (!CheckUser) return res.status(404).json({ status: 404, success: false, message: "User not found." });
        // console.log(CheckUser);
        const jwttoken = process.env.JWT;
        // console.log(jwttoken);
        // const token= jwt.sign(CheckUser._id,jwttoken)
        const token = jwt.sign({ userId: CheckUser._id }, jwttoken);
        // console.log(token)
        return res.status(200).json({ status: 200, success: true, message: "Logg in successful", data: token, CheckUser })
    } catch (error) {
        return res.status(400).json({ status: 400, success: false, message: "Internal server error" })
    }
}


export const getCurrentUser=async(req,res)=>{
    try {
        const {token}=req.body;
        const decToken=jwt.verify(token,process.env.JWT);
        const userId=decToken.userId;
        const user=await User.findById(userId);
        console.log(user);
        if(user){
            return res.status(200).json({status:200,success:true,user})
        }
    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "Internal server error" ,error:error})
    }
}