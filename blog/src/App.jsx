import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Config from './config/Config'
import './App.css'
import {useDispatch} from 'react-redux'
// import  Header  from './components/header/Header'
// import Fotter from './components/footer/Footer'
import { Header,Footer} from './components/Index'
import authService from './appwrite/Auth'
import { login, logout } from './store/Authslice'
import { Outlet } from 'react-router-dom'
function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  console.log(import.meta.env.VITE_APPWRITE_DATABASE_ID)
  console.log(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
  console.log(Config.appwritebucketid)
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.currentuser().then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}))
      }else{
        dispatch(logout({userdata}))
      }
    }).finally(()=> setloading(false))
  },[dispatch])

  return (!loading)?(
    <div className='min-h-screen flex flex-wrap'>
      <div className='w-full block'>
       <Header/>
       <main>todo : <Outlet/></main>
       <Footer/>
      </div>
    </div>
  ):null
  
}

export default App
