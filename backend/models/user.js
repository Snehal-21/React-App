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
    }
})

export default mongoose.model("User",user);