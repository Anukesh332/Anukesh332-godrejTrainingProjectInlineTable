import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


export default function Addpost() {

    const [body, setBody] = useState({
        id:"",
        type:"",
        name:"",
        ppu:""
})


    const handleChange = (event) => {
        setBody({
            ...body,
            [event.target.name]:event.target.value
        })
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(body)
        axios.post(" http://localhost:3000/posts", body, {
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }).then(response=>navigate('/')).catch(err=>console.log(err))
    }


  return (
    <>
      <h3 className="container">Addpost</h3>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your ID"
              id="id"
              name="id"
              value={body.id}
              onChange={handleChange}
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
              value={body.type}
              onChange={handleChange}
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
              value={body.name}
              onChange={handleChange}
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
              value={body.ppu}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onChange={handleChange}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
