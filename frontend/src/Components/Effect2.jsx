import { useEffect, useState } from "react";

const Effect2=()=>{
    const[counter,setCounter]=useState(0);
    useEffect(()=>{
        console.log("rendered")
    },[])
    return(
        <>
        <h1>counter : {counter}</h1>
        <button onClick={()=>setCounter((x)=>x+1)}>+</button>
        </>
    )
}
export default Effect2;