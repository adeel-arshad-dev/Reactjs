import React from "react";
let USerContext=React.createContext()

/* when we create a context we have to make a provider also tht will
 provide the value of context like in this case UserContext is
  the provider and we have to put all the components inside
   that provider like it is a globalvariable as following:

   <UserContextProvider>

   <login/>
   <card>

   <data/>

   <card/>

</UserContextProvider>
*/

export default USerContext