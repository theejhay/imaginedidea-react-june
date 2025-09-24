import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);

useEffect(() => {
    async function fetchPosts () {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const responseData = await res.json();
        setPosts(responseData);
        console.log(responseData);
    };

    fetchPosts();

}, []);

  return (
    <table className="table table-striped mt-5 mb-5">
      <thead>
        <tr>
          <th>#</th>
          <th> Title </th>
          <th> Body</th>
          <th> Action</th>
        </tr>
      </thead>

      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td> {post.id}</td>
            <td> {post.title}</td>
            <td> {post.body}</td>
            <td>
                <Link
                to={`/posts/${post.id}`}
                className="btn btn-primary btn-sm">
                    View
                </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostList;
