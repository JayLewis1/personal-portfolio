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
       <img className="project-photo" src="/assets/project-photos/dirt-com.jpeg" alt="Dirt Website"/>
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
       <p>Dirt is an Alice In Chains tribute band who came to me to create a website to display tour dates, videos they had of the band, a way of contact and some information on the band. I created this site with plain <b>html</b>, <b>css</b> and <b>javacript</b> for the front-end and used <b>node.js</b> and <b>express</b> for the server side.</p>
       <Link to="/projects" className="mobile-backbtn">
         <img src="/assets/icons/arrow.svg" alt="back arrow"></img>
         Back to projects</Link>
     </div>
  </div>
  )
}


export default Dirt;
