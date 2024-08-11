import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function Details() {

    let params = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${params.id}`)
        .then((response) => setPost(response.data))
        .catch((err) => console.log(err));
        // eslint-disable-next-line
    }, [])
    

  return post && <div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">{post.id}</h5>
    <h5 className="card-title">{post.type}</h5>
    <h5 className="card-title">{post.name}</h5>
    <h5 className="card-title">{post.ppu}</h5>
  </div>
</div>
    

   
  
}