import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import React from "react";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Blogs />
      <Projects />
    </>
  );
};

export default App;
