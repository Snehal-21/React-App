import mongoose,{Schema} from "mongoose";

const user=new Schema({
    name:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    Password:{
        type:String,
        unique:true
    },
    otp:{
        type:String
    },
    isOtpVerified:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model("User",user);