import { useEffect, useState } from "react";

function PostComment({ post }) {

  const [comments, setComments] = useState([]);


  const fetchComments = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    );
    const commentResponse = await response.json();
    setComments(commentResponse);
  };

  useEffect(() => {
    fetchComments();
  }, [post.id]);

  const style = {
    marginTop: "20px",
    padding: "20px",
  };

  return (
    <>

      <h3> Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="card" style={style}>
            <div className="card-body">
              <p className="card-title">
                <strong> Name: </strong>
                {comment.name}
              </p>
              <p className="card-title">
                <strong> Email: </strong>
                {comment.email}
              </p>
              <p className="card-title">
                <strong> Comment: </strong>
                {comment.body}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PostComment;
