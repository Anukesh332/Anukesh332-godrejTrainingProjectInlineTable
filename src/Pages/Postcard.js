import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Postcard() {
  const [post, setPost] = useState([]);
  const [isdeleted, setIsdeleted] = useState();

  const deleteRow = (id) => {
    const entryUrl = `http://localhost:3000/posts/${id}`;

    axios
      .delete(entryUrl)
      .then((response) => {
        console.log("Entry deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting entry:", error);
      })
      .then((response) => setIsdeleted(id))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => setPost(response.data))
      .catch((err) => console.log(err));
  }, [isdeleted]);

  return (
    <>
      <h3 className="container">Post-card</h3>
      {post.map((element, index) => {
        return (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <h5 className="card-title">{element.id}</h5>
              <h5 className="card-title">{element.type}</h5>
              <h5 className="card-title">{element.name}</h5>
              <h5 className="card-title">{element.ppu}</h5>
              <h5 className="card-title" onClick={(e) => deleteRow(element.id)}>
                <i className="bi bi-trash-fill"></i>
              </h5>
            </div>
          </div>
        );
      })}
    </>
  );
}
