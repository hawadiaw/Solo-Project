import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import axios from "axios";
const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState({});
  // const [error, setError]=useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:8002/api/oneMemory/${id}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.title)
        setMessage(res.data.message)
        setTags(res.data.tags)
        setImage(res.data.image)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  
  const EditPetHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8002/api/update/${id}`, {
        title,
        message,
        tags,
        image
      })
      .then((res) => {
        navigate(`/post/${id}`)
        console.log(res);
      })
      .catch((err) => {
        setError(err.response.data.errors);
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="form edit">
        <h3>Creating a memory</h3>
        <form onSubmit={EditPetHandler}>
        {error.title ? <p className="danger">{error.title.message}</p> : null}
          <input
            type="text"
            placeholder="Title"
            className="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error.message ? <p className="danger">{error.message.message}</p> : null}
          <input
            type="text"
            placeholder="Message"
            className="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
          <input
            type="text"
            placeholder="Tags"
            className="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          {error.image ? <p className="danger">{error.image.message}</p> : null}
          <input
            type="text"
            className="img"
            placeholder="Image-address"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button className="btn-1">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
