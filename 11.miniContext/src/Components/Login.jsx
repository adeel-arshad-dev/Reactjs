import React from "react";
import { useState,useContext } from "react";
import USerContext from "../assets/Context/UserContext";

function Login(){
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    
  const {setuser}=useContext(USerContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setuser({username,password})
    }

return(
    <div>
    <h2>Login</h2>

    <input type="text"
    value={username}
    onChange={(e)=> setusername(e.target.value)}
    placeholder="Enter Your UserName"/>
  {" "}
    <input type="text" 
    value={password}
onChange={(e)=> setpassword(e.target.value)}
    placeholder="Enter Your Password"/>
    <button onClick={handleSubmit}>Submit</button>
        </div>
)

}

export default  Login