import React from "react";

import USerContext from "./UserContext";
import { useState } from "react";

const UserContextProvider=({children})=>{
 const [user,setuser]=useState(null)
 return(
 <USerContext.Provider value={{
    user , setuser}}>
        {children}
    </USerContext.Provider>
 );
}
export default UserContextProvider;