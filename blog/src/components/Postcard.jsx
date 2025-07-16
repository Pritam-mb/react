import React from 'react'
import appwriteService from '../appwrite/Conf'
import { Link } from 'react-router-dom'
function Postcard({$id, title , featureimg}) {
  return (
    <Link to={`/post/${$id}`} >
<div className='w-full bg-grey-100 rounded-xl p-4'>
    <div className='w-full justify-center mb-4'>
        <img src={appwriteService.getfilepreview(featureimg)} alt={title}  className='text-xl font-bold'/>
    </div>
    <h2>{title}</h2>
</div>
    </Link>
  )
}

export default Postcard
