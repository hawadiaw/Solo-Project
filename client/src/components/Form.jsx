import {useState} from 'react'
import axios from 'axios'

const Form = ({products, setProducts}) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [tags, setTags] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState({});
    // const [error, setError]=useState({})
    const submitHandler = (e) => {
      e.preventDefault();
  
      axios
        .post("http://localhost:8002/api/addMemory", {
          title,
          message,
          tags,
          image
        })
        .then((res) => {
            console.log(res.data);
            console.log(res);
            setProducts([...products, res.data])
            setTitle("");
            setMessage("");
            setTags("");
            setImage("")
            
       
       
        })
        .catch((err) => {
          setError(err.response.data.errors)
          console.log(err);
        });
    };

  return (
    <div className='container'>
    <div className="form">
      <h3>Creating a memory</h3>
      <form onSubmit={submitHandler}>
      {error.title ? <p className="danger">{error.title.message}</p> : null}
        <input type="text" placeholder="Title" className="title" value={title} onChange={e=>setTitle(e.target.value)}/>
        {error.message ? <p className="danger">{error.message.message}</p> : null}
        <input type="text" placeholder="Message" className="message" value={message} onChange={e=>setMessage(e.target.value)}/>
        <input type="text" placeholder="Tags" className="tags" value={tags} onChange={e=>setTags(e.target.value)}/>
        {error.image ? <p className="danger">{error.image.message}</p> : null}
        <input type="text" className="img" placeholder="Image-address" value={image} onChange={e=>setImage(e.target.value)}/>
        <button className="btn-1">Submit</button>
        <button className="btn-2">Clear</button>
      </form>
    </div>
    </div>
  );
};

export default Form;
