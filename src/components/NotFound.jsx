import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-5 mb-5">
      <h2 className="display-4 text-danger"> 404 !</h2>
      <h2 className="lead"> Oops! looks like you're lost man!</h2>
      <Link to="/" className="btn btn-primary"> Go Back Home</Link>
      <button className="btn btn-warning"> Show</button>
      {/* <p className="alert alert-info"> Welcome to Imagined Idea React Class! </p> */}

    </div>
  );
}

export default NotFound;
