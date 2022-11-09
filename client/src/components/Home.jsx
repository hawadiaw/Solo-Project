import Form from "../components/Form";
import Posts from "../components/Posts";
import {useState} from 'react'

const Home = () => {
    const[products, setProducts]=useState([])
    
  return (
    <div className="home">
      <Posts products={products} setProducts={setProducts} className="pst-style" />
      
      <Form pproducts={products} setProducts={setProducts} className="frm-style" />
      
    </div>
  );
};

export default Home;
