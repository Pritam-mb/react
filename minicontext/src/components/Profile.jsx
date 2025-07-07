import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
        const {user} = useContext(UserContext)
        if(!user) return <h2>login pls</h2>

  return (
    <div>
      <h2>welcome {user.name} </h2>
    </div>
  )
}

export default Profile
