import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Carousel from "./components/Carousel";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/post-list" element={<PostList />}></Route>
        <Route path="/posts/:postId" element={<PostDetails />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
      </Routes>
    </>
  );
}

export default App;
