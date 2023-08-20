import React, { useState } from 'react';
import toast from "react-hot-toast";

const Dynamic = () => {
    const[isActive,setIsActive]=useState(false);
    const handleClick=()=>{
        setIsActive(!isActive);
        if(!isActive){
            toast.success("True");
        }else{
            toast.error("False")
        }

    }
    const classVariable = isActive ? "border-black border bg-green-500" : "border-black border bg-red-400";
  return (
   <>
    <div>Dynamic</div>
    <button className={classVariable} onClick={handleClick}>{isActive?'Active':'Inactive'}</button>
   </>

  )
}

export default Dynamic;