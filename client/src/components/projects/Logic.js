import React , { useEffect }from 'react';
import { Link } from "react-router-dom";

const Logic = () => {

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
       <img className="project-photo" src="/assets/project-photos/logic-com.jpeg" alt="Logic Website"/>
     </div>
     <div>
       <h3>Logic Trades</h3>
       <span className="link-container">
         <a href="https://github.com/JayLewis1/logic-trades" target="_blank" rel="noreferrer">
           <img src="/assets/icons/github-blue.svg" alt="Github Link"/>
         </a>
         <a href="https://logictrades.herokuapp.com/" target="_blank" rel="noreferrer">
           <img src="/assets/icons/website-blue.svg" alt="Website Link"/>
         </a>
       </span>
       <p>This is a proto-type company website for a forex trading team. The team wanted a site where they can show their services, testimonials, FAQ's, a way of joining their group and a contact page. I created this project using <b>React</b>, <b>redux</b>, <b>node.js</b> and <b>express</b>.</p> 
       <p>I chose react because of the ease of creating UI components and gave the option to scale up in the future. I needed a way of handling cross application state which brought me to redux as it's a nice, simple, scaleable way of handling state which allows an efficient way for the frontend and server to communicate.</p>
       <Link to="/projects" className="mobile-backbtn">
         <img src="/assets/icons/arrow.svg" alt="back arrow"></img>
         Back to projects</Link>
     </div>
  </div>
  )
}


export default Logic;
