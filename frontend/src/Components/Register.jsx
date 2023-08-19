import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register=()=>{

    const [value,changeValue]=useState({
        name:"",
        email:"",
        Password:"",
        confirmPassword:""
    })

    const router=useNavigate();
    const Login=()=>{
        router('/login');
    }
    const Home=()=>{
        router('/');
    }

    const handleChange=(e)=>{
        changeValue({...value,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(value.name && value.email && value.Password && value.confirmPassword){
            const response=await axios.post("http://localhost:8005/api/register",
            {
                name:value.name,
                email:value.email,
                Password:value.Password,
                confirmPassword:value.confirmPassword
            })
            console.log(response.data);
            if(response.data.status==200){
                alert(response.data.message);
                router('/login');
            }
            if(response.data.status==400){
                alert(response.data.message);
            }
        }else{
            alert("All fields are required.")
        }
    }
    return(
        <>
        <h1  className="mt-10 text-2xl font-semibold">Register Page</h1>
        <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-blue-950 text-white" onClick={Login}>Login</button>
        <button className="rounded-lg w-20 h-10 bg-green-600 text-white" onClick={Home}>Home</button>
        </>
    //     <>
    //    <div className="w-full h-screen bg-blue-300 flex justify-center items-center">
    //    <form className="h-[500px] w-[400px] bg-green-400 p-5" onSubmit={handleSubmit}>
    //         <input className="h-12 w-full mb-10 pl-3 bg-red-400 caret-white" onChange={handleChange} type="text" name="name" placeholder="Enter Name" />
    //         <input className="h-12 w-full mb-10 pl-3 bg-red-400" onChange={handleChange} type="email" name="email" placeholder="Enter Email" />
    //         <input className="h-12 w-full mb-10 pl-3 bg-red-400" onChange={handleChange} type="password" name="Password" placeholder="Enter Password" />
    //         <input className="h-12 w-full mb-10 pl-3 bg-red-400" onChange={handleChange} type="password" name="confirmPassword" placeholder="Confirm ypur password" />
    //         <input className="h-12 w-full mb-10 pl-3 text-white bg-teal-500 border-black border" type="submit" value="Register" />
    //     </form>
    //    </div>
    //     </>
    )
}
export default Register;