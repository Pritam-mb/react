import React from 'react'
// import authService from '../appwrite/Auth'
import authService from '../../appwrite/Auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/Authslice'
function Logo() {
    const dispatch= useDispatch();
    const handler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
      <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={handler}
    >Logout</button>
  )
}

export default Logo
