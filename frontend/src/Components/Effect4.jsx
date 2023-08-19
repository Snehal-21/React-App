import { useEffect, useState } from "react";

const Effect4=()=>{
    const [counter1,setcounter1]=useState(0);
    const[counter2,setcounter2]=useState(0);
    useEffect(()=>{
        console.log("rendered");
    },[counter1,counter2])
    return(
        <>
        <h1>Counter 1 : {counter1}</h1>
        <button onClick={()=>setcounter1((x)=>x+1)}>+ Counter1</button>
        <h1>Counter 2 : {counter2}</h1>
        <button onClick={()=>setcounter2((x)=>x+1)}>+ Counter2</button>
        </>
    )
}
export default Effect4;