import './App.css'
import './index.css';
import { ThemeProvider } from './Contexts/Theme';
import { useState,useEffect } from 'react';
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';
function App() {
 

  const [themeMode,setThemeMode]=useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

    // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    
    <ThemeProvider value={ {themeMode, darkTheme,lightTheme}} >
<div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-[25%] max-w-sm mx-auto flex justify-end mb-4">
             <ThemeBtn/>
            </div>
          <Card/>
            <div className="w-full max-w-sm mx-auto">
                
            </div>
        </div>
    </div>

  </ThemeProvider>
  )
}

export default App
