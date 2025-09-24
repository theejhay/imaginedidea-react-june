import { useState } from "react";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [success, setSuccess] = useState(false);

    const CREATED = 201;

    const handleSubmit = async () => {
        // prepare the data to be posted
        const newPost = {
            title,
            body,
            userId: 1
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
        const data = await response.json();
        console.log(response);

        if (response.ok === true && response.status === CREATED){
            setSuccess(true);
        }
    }


  return (
    <div className="container mt-5 mb-5">
        {success && (
            <div className="alert alert-success"> Post Created Successfully! </div>
        )}
      <form className="mt-4">
        <div className="">
          <label className="form-label"> Title </label>
          <input
            type="text"
            className="form-control"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="">
          <label className="form-label"> Body </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Post Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <button type="button" className="btn btn-success btn-sm" onClick={handleSubmit}> Create </button>
      </form>
    </div>
  );
}

export default CreatePost;
