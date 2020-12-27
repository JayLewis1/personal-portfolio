import React , { useEffect } from 'react';
import { Link } from "react-router-dom";

const Dirt = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
    <div className="backbtn">
      <Link to="/projects">
        <img src="/assets/icons/arrow-left-blue.svg" alt="Back to projects"/>
      </Link>
    </div>
     <div className="photo-container">
       <img className="project-photo" src="/assets/project-photos/dirt@2x.jpg" alt="Dirt Website"/>
     </div>
     <div>
       <h3>Dirt</h3>
       <span className="link-container">
         <a href="https://github.com/JayLewis1/dirt" target="_blank" rel="noreferrer">
           <img src="/assets/icons/github-blue.svg" alt="Github Link"/>
         </a>
         <a href="http://www.dirtaliceinchains.com/" target="_blank" rel="noreferrer">
           <img src="/assets/icons/website-blue.svg" alt="Website Link"/>
         </a>
       </span>
       <p>Dirt is an alice in tribute band who came to me to create a website to display tour dates, videos they had of the band, a way of contact and some information on the band. I created this site with plain html, css and javacript for the front-end and used node.js and express for the server side. I believe this project resulted really well although I didn't use React because it was a single page statless site.</p>
       <Link to="/projects" className="mobile-backbtn">
         <img src="/assets/icons/arrow.svg" alt="back arrow"></img>
         Back to projects</Link>
     </div>
  </div>
  )
}


export default Dirt;
