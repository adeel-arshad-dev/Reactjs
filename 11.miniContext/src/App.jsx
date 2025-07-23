import { useState } from 'react'

import './App.css'
import UserContextProvider from './assets/Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
 

  return (
    <UserContextProvider>
   <h3>Now this will print the username that we have entered in the placeholder</h3>
   <Login />
   <Profile />
    </UserContextProvider>
  )
}

export default App
