import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);

  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");

  const CREATED = 201;

  // const validateTitle = (title) => {
  //   if (!title.trim()) {
  //     setTitleError("Title is Required!");
  //     return false;
  //   } else if (title.trim().length < 4) {
  //     setTitleError("Title must be at least 4 characters");
  //     return false;
  //   } else if (title.trim().length > 20) {
  //     setTitleError("Title cannot be more than 20 characters");
  //     return false;
  //   } else {
  //     setTitleError("");
  //     return true;
  //   }
  // };

  const titleRegex = /^.{4,20}$/;

  const validateTitle = (title) => {
    const checkTitle = titleRegex.test(title);
    if(!checkTitle){
      setTitleError("Title must be at least 4 characters and not more than 20 characters");
      return false;
    } else {
      setTitleError("");
      return true;
    }
  }

  const validateBody = (body) => {
    if (!body.trim()) {
      setBodyError("Body is Required!");
      return false;
    } else if (body.trim().length < 10) {
      setBodyError("Body must be at least 10 characters");
      return false;
    } else if (body.trim().length > 200) {
      setBodyError("Body cannot be more than 200 characters");
      return false;
    } else {
      setBodyError("");
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isTitleValid = validateTitle(title);
    const isBodyValid = validateBody(body);

    if (!isBodyValid || !isTitleValid) {
      setSuccess(false);
      return;
    }

    // prepare the data to be posted
    const newPost = {
      title,
      body,
      userId: 1,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );
    const data = await response.json();
    console.log(response);

    if (response.ok === true && response.status === CREATED) {
      setSuccess(true);
      setBody("");
      setTitle("");
    } else {
      setSuccess(false);
    }
  };

  const isFormValid =
    title.trim().length >= 4 &&
    title.trim().length <= 20 &&
    body.trim().length >= 10 &&
    body.trim().length <= 200;

  return (
    <div className="container mt-5 mb-5">
      {success && (
        <div className="alert alert-success"> Post Created Successfully! </div>
      )}
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="">
          <label className="form-label"> Title </label>
          <input
            type="text"
            className="form-control"
            placeholder="Post Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              validateTitle(e.target.value);
            }}
          />
          {titleError && <p className="text-danger"> {titleError}</p>}
        </div>

        <div className="">
          <label className="form-label"> Body </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Post Body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              validateBody(e.target.value);
            }}
          ></textarea>
          {bodyError && <p className="text-danger"> {bodyError}</p>}
        </div>

        <button
          type="submit"
          className="btn btn-success btn-sm"
          disabled={!isFormValid}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
