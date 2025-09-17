import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Carousel from "./components/Carousel";
import Toggle from "./components/Toggle";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Toggle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
