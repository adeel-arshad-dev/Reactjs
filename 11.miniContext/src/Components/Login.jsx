import React from "react";
import { useState,useContext } from "react";
import USerContext from "../assets/Context/UserContext";

function Login(){
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    
  const {setuser}=useContext(USerContext)

    const handleSubmit=(event)=>{
        event.preventDefault();
        setuser({username,password})
    }

return(
    <div>
    <h2>Login</h2>

    <input type="text"
    value={username}
    onChange={(event)=> setusername(event.target.value)}
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
