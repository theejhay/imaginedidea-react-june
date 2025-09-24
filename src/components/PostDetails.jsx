import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetails() {
  const { postId } = useParams();

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const postResponse = await response.json();
    setPost(postResponse);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const style = {
    marginTop: "20px",
    padding: "20px",
  };

  return (
    <>
    <Link to={"/post-list"} className="btn btn-info btn-sm" style={{margin: "20px"}}>
          Go Back
        </Link>
      <div className="card" style={style}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>

      <h3> Comments</h3>
    </>
  );
}

export default PostDetails;
