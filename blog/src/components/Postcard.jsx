import React from 'react';
import appwriteService from '../appwrite/Conf';
import { Link } from 'react-router-dom';

function Postcard({ $id, title, featureimg }) {
  const imgUrl = appwriteService.getfilepreview(featureimg);

  console.log("Postcard:", { $id, title, featureimg, imgUrl });

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={imgUrl}
            alt={title}
            className="rounded-lg w-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default Postcard;
