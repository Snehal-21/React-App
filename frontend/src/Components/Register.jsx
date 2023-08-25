import { useState } from "react";
import Toast  from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [userData,setUserData]=useState({name:"",email:"",Password:"",confirmPassword:""});
    const router=useNavigate();

   const handleChange=(e)=>{
            setUserData({...userData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
    e.preventDefault();
    
        if(userData.name && userData.email && userData.Password && userData.confirmPassword){
                try {
                    const response=await axios.post('http://localhost:8005/api/register',{
                    name:userData.name,
                    email:userData.email,
                    Password:userData.Password,
                    confirmPassword:userData.confirmPassword
                });
                const data=response.data;
                if(data.success){
                    Toast.success(data.message);
                    router('/login');
                }
                } catch (error) {
                    if(!error.response.data.success){
                        console.log(error);
                        Toast.error(error.response.data.message);
                    }
                }
                
            }else{
            Toast.error("All fields are required.")
        }
    }


    return (
        <>
        <div className="w-screen h-screen bg-rose-100 flex justify-center items-center" >
            
            <form className="h-[540px] w-[450px] bg-rose-950 p-5 relative rounded-xl" onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl text-fuchsia-300 font-bold mb-5">Register</h1>
                <label className="text-green-300">Name :</label><br/>
                <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="text" name="name" placeholder="Enter Name" /><br/>
                <label className="text-green-300">Email :</label><br/>
                <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="email" name="email" placeholder="Enter Email" /><br/>
                <label className="text-green-300">Password :</label><br/>
                <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="password" name="Password" placeholder="Enter Password" /><br/>
                <label className="text-green-300">Confirm Password :</label><br/>
                <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="password" name="confirmPassword" placeholder="Confirm Your password" /><br/>
                <input className=" h-[40px] w-[100px] border fixed transform -translate-x-1/2 -translate-y-1/2 top-[77%] left-1/2 hover:border-green-800  hover:text-fuchsia-700 hover:bg-fuchsia-300 text-white rounded-lg" type="submit" value="Register" />
            </form>
        </div>


        </>
    )
}
export default Register;