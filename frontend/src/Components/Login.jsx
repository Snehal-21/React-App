import { useNavigate } from "react-router-dom";
const Login=()=>{
    const router=useNavigate();

    const Register=()=>{
        router('/register')
    }
    const Home=()=>{
        router('/')
    }

    return(
        <>
        <h1  className="mt-10 text-2xl font-semibold">Login Page</h1>
        <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-blue-950 text-white"  onClick={Register}>Register</button>
        <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-green-950 text-white"  onClick={Home}>Home</button>
        </>
    )
}
export default Login;