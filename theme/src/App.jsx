import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './context/Theme'
import Card from './components/Card'
import Btn from './components/Btn'
function App() {
  const [thememode, setthememode] = useState("light")
const lighttheme =()=>{
  setthememode("light")
}
const darktheme =()=>{
  setthememode("dark")
}
useEffect(()=>{
  document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
},[thememode])

  return (
    <Themeprovider value={{thememode,lighttheme,darktheme}}>

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Btn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </Themeprovider>
  )
}

export default App
