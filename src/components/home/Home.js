import React from 'react';

import Introduction from "./Introduction";
import Projects from "./Projects";
import About from "../about/About";
import Interests from "./Interests";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
        <Introduction />
        <Projects />
        <About />
        <Interests />
        <Contact />
    </div>
  )
}

export default Home;