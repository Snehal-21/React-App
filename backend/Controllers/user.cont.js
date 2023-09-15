import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sendSms from "../helpers/twilio.js";

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


export const getCurrentUser = async (req, res) => {
    try {
        const { token } = req.body;
        const decToken = jwt.verify(token, process.env.JWT);
        const userId = decToken.userId;
        const user = await User.findById(userId);
        console.log(user);
        if (user) {
            return res.status(200).json({ status: 200, success: true, user })
        }
    } catch (error) {
        return res.status(500).json({ status: 500, success: false, message: "Internal server error", error: error })
    }
}



//twilio functions

export const verifyPhone = async (req, res) => {
    try {
        const { userId, number } = req.body;
        if (!userId) return res.status(404).json({ status: 404, success: false, message: "User Id is required." });
        if (!number) return res.status(404).json({ status: 404, success: false, message: "Phone numbre is required." });
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ success: false, status: 404, message: "User not found." })
        const otp = 852369;
        const message = `Hi here is your phone verification otp - ${otp}`;
        const response=await sendSms(number,message);
        if(response){
            const updateUser=await User.findByIdAndUpdate(userId,{otp:otp});
            if(updateUser){
                return res.status(200).json({status:200,success:true,message:"Otp is Successfully sent on your mobile."})
            }
            return res.status(500).json({status:500,success:false,message:"Internal server error."});
        }
        return res.status(500).json({status:500,success:false,message:"Internal server error."});
    } catch (error) {
        return res.status(500).json({ "success": false, "status": 500, message: "Internal server error", error: error })
    }
}


export const verifyOtp=async(req,res)=>{
    try {
        const {userId,otp}=req.body;
        if (!userId) return res.status(404).json({ status: 404, success: false, message: "User Id is required." });
        if (!otp) return res.status(404).json({ status: 404, success: false, message: "OTP is required." });
        console.log(userId,otp);
        const findUser = await User.findById(userId);

        if(findUser.otp === otp){
            return res.status(200).json({status:200,success:true,message:"OTP verified"})
        }else{
            return res.status(404).json({status:404,success:false,message:"Otp is Wrong."})
        }
        

        
    } catch (error) {
        return res.status(500).json({ "success": false, "status": 500, message: "Internal server error", error: error })
    }
}