import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "react-hot-toast";
import axios from "axios";
const Login = () => {
    const [userData, setUserData] = useState({ email: "", Password: "" });
    const router = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.email && userData.Password) {
          try {
            const response = await axios.post("http://localhost:8005/api/login", {
                email: userData.email,
                Password: userData.Password
            });
            const data=response.data;
            if(data.success){
                Toast.success(data.message);
            }
          } catch (error) {
            if(!error.response.data.success){
                Toast.error(error.response.data.message);
            }
          }
        } else {
            Toast.error("Both fiels are required.")
        }
    }

    const Register = () => {
        router('/register')
    }
    const Home = () => {
        router('/')
    }

    return (
        <>
            <div className="w-screen h-screen bg-rose-950 flex justify-center items-center">
           
                <form className="h-[340px] w-[450px] bg-lime-950 p-5 relative rounded-xl" onSubmit={handleSubmit}>
                <h1 className="text-center text-3xl text-fuchsia-300 font-bold mb-5">Login</h1>
                    <label className="text-green-300">Email : </label><br/>
                    <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="email" name="email" placeholder="Enter Email" /><br/>
                    <label className="text-green-300">Password : </label><br/>
                    <input className="w-full h-[40px] mt-2 mb-5 pl-3 rounded-lg bg-lime-300 outline-none placeholder-amber-600" onChange={handleChange} type="Password" name="Password" placeholder="Enter Password" /><br/>
                    <input className=" h-[40px] w-[100px] border fixed transform -translate-x-1/2 -translate-y-1/2 top-[68%] left-1/2 hover:border-green-800 hover:bg-blue-500 text-white rounded-lg" type="submit" value="Login" />
                </form>
            </div>
            {/* <h1  className="mt-10 text-2xl font-semibold">Login Page</h1> */}
        <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-blue-950 text-white"  onClick={Register}>Register</button>
        <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-green-950 text-white"  onClick={Home}>Home</button>
        </>
    )
}
export default Login;