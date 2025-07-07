import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
     
    </>
  )
}

export default App
