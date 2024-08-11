import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Editpost() {


  let params = useParams();
  const [bodyedit, setBodyedit] = useState();


  const handleChangeedit = (event) => {
    setBodyedit({
        ...bodyedit,
        [event.target.name]:event.target.value
    })
}

  const navigate = useNavigate();

  const handleSubmitedit = (event) => {
    event.preventDefault();
    console.log(bodyedit)
    axios.put(`http://localhost:3000/posts/${params.id}`, bodyedit, {
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }).then(response=>navigate('/')).catch(err=>console.log(err))
}



  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${params.id}`)
    .then((response) => setBodyedit(response.data))
    .catch((err) => console.log(err));
    // eslint-disable-next-line
}, [])



  return bodyedit &&
    <>
    <h3 className='container'>Editpost</h3>

    <div className="container">
        <form onSubmit={handleSubmitedit}>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your ID"
              id="id"
              name="id"
              value={bodyedit.id}
              onChange={handleChangeedit}
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Type"
              id="type"
              name="type"
              value={bodyedit.type}
              onChange={handleChangeedit}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              id="name"
              name="name"
              value={bodyedit.name}
              onChange={handleChangeedit}
            />
          </div>
          <div className="form-group">
            <label>PPU</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your PPU"
              id="ppu"
              name="ppu"
              value={bodyedit.ppu}
              onChange={handleChangeedit}
            />
          </div>
          <button type="submit" className="btn btn-primary" onChange={handleChangeedit}>
            Submit
          </button>
        </form>
      </div>
    </>
  
}
