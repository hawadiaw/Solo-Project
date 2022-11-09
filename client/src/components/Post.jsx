import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [onePost, setOnePost] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8002/api/oneMemory/${id}`)
      .then((res) => {
        console.log(res);
        setOnePost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
   <section>
    <div className="one-post">
      <div className="post-left">
        <h1>{onePost.title}</h1>
        <p className="post-tag">{onePost.tags}</p>
        <p className="post-msg">{onePost.message}</p>
        <span></span>
        <Link to= {`/editpost/${onePost._id}`}>Edit</Link>
        
      </div>
      <div className="post-right">
        <img src={onePost.image} alt="" />
      </div>
    </div>
    </section>
  );
};

export default Post;
