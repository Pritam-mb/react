import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch} from 'react-redux'
// import  Header  from './components/header/Header'
// import Fotter from './components/footer/Footer'
import { Header,Footer} from './components/Index'
import authService from './appwrite/Auth'
import { login, logout } from './store/Authslice'
function App() {
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
  })

  return (!loading)?(
    <div className='min-h-screen flex flex-wrap'><div>
      <Header/>
      <p>todo</p>
      <main>

      </main>
      <Footer/></div></div>
  ):null
  
}

export default App
