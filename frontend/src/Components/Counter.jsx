import { useState } from "react";

const Counter = () =>{
    const [counter,setCounter]=useState(0);
    const [flag,setFlag]=useState(false);
    const Increment=()=>{
        setCounter((x)=>x+1);
    }
    const Decrement=()=>{
        setCounter((x)=>x-1);
    }
    const changeFlag=()=>{
        if(flag==false){
            setFlag(true);
        }else{
            setFlag(false);
        }
    }
    return (
        <>
            {flag?<h1>flag is true</h1>:<h1>flag is false</h1>}
            <h1  className="mt-10 text-2xl font-semibold">Counter : {counter}</h1>
            <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-green-800 text-white" onClick={Increment}>+</button>
            <button className="rounded-lg w-20 h-10 mr-10 mt-10 bg-red-800 text-white" onClick={Decrement}>-</button>
            <button onClick={changeFlag}>Change Flag</button>
        </>
    )
}

export default Counter;