import React from "react";
import { useContext } from "react";
import USerContext from "../assets/Context/UserContext";

function Profile(){
 const { user}=useContext(USerContext)

 if(!user?.username && !user?.password) return <div>Plz Create Account!</div>
 if(!user?.password) return <div>Plz Enter Password!</div>

 if(!user?.username) return <div>Plz Enter UserName!</div>

 return <div>Welcome Back Dear {user.username}</div>
    
}

export default Profile;