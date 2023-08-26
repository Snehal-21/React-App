import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

const Home=()=>{
    const router=useNavigate();
    const {state}=useContext(AuthContext);
    const Register=()=>{
        router('/register');
    }
    const Login=()=>{
        router('/login');
    }
    const Counter=()=>{
        router('/counter')
    }
    console.log(state);
    return(
        <>
        <h1 className="mt-10 text-2xl font-semibold">Home Page : <span className="uppercase text-4xl text-green-400">{state?.user?.name}</span></h1>

        <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-blue-950 text-white" onClick={Register}>Register</button>
        <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-green-950 text-white"onClick={Login}>Login</button>
        <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-orange-600 text-white"onClick={Counter}>Counter</button>
        </>
    )
}
export default Home;