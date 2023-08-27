import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const AuthContext=createContext();



const initialState={user:null};

const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,user:action.payload}
        case "LOGOUT":
            localStorage.removeItem("jwtToken");
            toast.success("Logout Successful")
            return {...state,user:null}
            
        default:
            return state;
    }
}


const HandleAuthContext=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState);

    useEffect(()=>{
        async function getCurrentUser(){
            const token=JSON.parse(localStorage.getItem("jwtToken"));
            if(token){
                const response=await axios.post("http://localhost:8005/api/getCurrentUser",{
                    token
                });
                if(response.data.success){
                    dispatch({
                        type:"LOGIN",
                        payload:response.data.user
                    })
                }
            }
        }getCurrentUser();
    },[])

    return(
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default HandleAuthContext;