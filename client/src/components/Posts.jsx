import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Posts = ({ products, setProducts }) => {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8002/api/allMemories")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const deleteHandler = (idBelow) => {
    axios
      .delete(`http://localhost:8002/api/delete/${idBelow}`)
      .then((response) => {
        console.log("success deleting author");
        console.log(response);
        const filter = products.filter((product) => {
          return product._id !== idBelow;
        });
        setProducts(filter);
      })
      .catch((err) => {
        console.log("error deleting author", err.response);
      });
  };
  return (
    <div className="posts">
      {products.map((product) => {
        return (
          <div className="card pst" key={product._id}>
            <Link to={`/post/${product._id}`}>
              {" "}
              <img className="card-img-top" src={product.image} alt="" />
            </Link>
            <div className="card-body body">
              <h3 className="card-title">{product.title}</h3>

              <p className="tags">{product.tags}</p>
              <p className="card-text">{product.message}</p>
              <FontAwesomeIcon
                onClick={() => deleteHandler(product._id)}
                className="imga"
                icon={faTrash}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
