import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter=5 this will give an error because we have declared that in usestate()


  /*
  <><><><><> use of HOOK  <><><><><><>
  #1<> to use hook we have to write the function useState()
  #2<> than we have to pass a value (it may be object,function,array,string etc. but preferto use the default value of variabl that we are using).
  #3<> useState() return two things in the format of arrays so we have to declae it with the variable and keep in  mind that you donot have to declare that variable again before or after useState()
  
      const [counter,setCounter]= useState(15)
      ==== counter-> variable( this is also the declaration of a variable .)
      ====setCounter-> function( this is function that we will use for updation of value)
  */

  let [counter, setCounter] = useState(15)


  const addValue = () => {
    /*
    -------< Problem :  Here is a problem that when 
    the value of counter is updated on clicking add 
    value buton it is not increased on UI. for 
    resolving that issue we have to use hooks.
    >---------k
    */
    //  counter=counter+1
    //  setCounter(counter) this will aslo work
    if (counter < 20) {
      setCounter(counter + 1)
    }
    else {
      return counter
    }

  }
  let decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    else {
      return counter
    }
  }


  return (
    <>
      <h1>Chai Aur React</h1>


      <h2>counter value:{counter}</h2>
      <button
        onClick={addValue}>Add Value</button>

      <button onClick={decValue}>Decrease value</button>
      <br />
    </>
  )
}

export default App


/*
-------------< INTERVIEW QUESTION <><><><><><><><><>

#<><><>Q1<><><> : what willl happen we write the vaue of counter as
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)  will its value be uncreased to 19 after
 oneclick or not as they are written in same function of addValue?

::::::Answer::::  <>  no as we will click on add value its value will be updated by 1 only. 


:<><><><><>:NOTE::<><><><><>  to that we have to put previous vlaue in a function
 and keep in mind that it takes call back function and return a value.
  as i have used prevCounter but u can use counter etc

----> when the code will be written as in following example now on one click
 the value will be updated by 4.
   
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)


    INTERVIEW QUESTION >-----------------------
*/