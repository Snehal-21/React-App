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
            if(userData.Password.length >=5 && userData.confirmPassword.length >=5){
            if(userData.Password === userData.confirmPassword){
                const response=await axios.post('http://localhost:8005/api/register',{
                    name:userData.name,
                    email:userData.email,
                    Password:userData.Password,
                    confirmPassword:userData.confirmPassword
                });
                if(response.data.status===200){
                    Toast.success(response.data.message);
                    router('/login')
                }else if(response.data.status === 400){
                    Toast.error(response.data.message);
                }else if(response.data.status === 403){
                    Toast.error(response.data.message);
                }else{
                    Toast(response.data.message);
                }
            }else{
                Toast.error("Passwords not matched")
            }
        }else{
            Toast.error("Password should be greater than 5 digits.")
        }
        }else{
            Toast.error("All fields are required.")
        }
    }


    return (
        <>
        <div className="w-screen h-screen bg-rose-950 flex justify-center items-center" >
            
            <form className="h-[540px] w-[450px] bg-lime-950 p-5 relative rounded-xl" onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl text-fuchsia-300 font-bold mb-5">Register</h1>
                <label className="text-green-300">Name :</label><br/>
                <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="text" name="name" placeholder="Enter Name" /><br/>
                <label className="text-green-300">Email :</label><br/>
                <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="email" name="email" placeholder="Enter Email" /><br/>
                <label className="text-green-300">Password :</label><br/>
                <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="password" name="Password" placeholder="Enter Password" /><br/>
                <label className="text-green-300">Confirm Password :</label><br/>
                <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="password" name="confirmPassword" placeholder="Confirm Your password" /><br/>
                <input className=" h-[40px] w-[100px] border fixed transform -translate-x-1/2 -translate-y-1/2 top-[77%] left-1/2 hover:border-green-800 hover:bg-blue-500 text-white rounded-lg" type="submit" value="Register" />
            </form>
        </div>


        </>
    )
}
export default Register;