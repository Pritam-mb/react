import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [name,setname] =useState('')
    const [password,setpassword]=useState('')
    const {setuser} = useContext(UserContext)
    const submit =(e)=>{
e.preventDefault()
setuser({name,password})
    }
  return (
    <div>
      <input type="text" placeholder='name' value={name} onChange={(e)=> setname(e.target.value)}/>
      <input type="text" placeholder='password'  value={password} onChange={(e)=> setpassword(e.target.value)}/>
      <button onClick={submit}>submit

      </button>
    </div>
  )
}

export default Login
