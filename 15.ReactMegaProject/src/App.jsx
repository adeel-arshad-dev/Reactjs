import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import './App.css'
import {login,logout} from "./store/authSlice"
import authService from './appwrite/auth';
function App() {


  const[loading, setLoading] = useState(true);
  const dispatch= useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData) {
        dispatch(login({userData}));
      } else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])
  // return (
  //   <>
  //    <h1>App write</h1>
  //   </>
  // )

  // we will check if loadind is
  //  completed than we will return that function

// we can use here if else condition

  return !loading ? (
    <div>hello</div>
  ): null
}

export default App
