import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BouncingBorders = () => {

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
         <img className="project-photo" src="/assets/project-photos/bouncing-borders@2x.jpg" alt="Bouncing Borders Website"/>
       </div>
       <div>
         <h3>Bouncing Borders</h3>
         <span className="link-container">
           <a href="https://github.com/JayLewis1/bouncingborderswp" target="_blank" rel="noreferrer">
             <img src="/assets/icons/github-blue.svg" alt="Github Link"/>
           </a>
           <a href="http://bouncingborders.com/" target="_blank" rel="noreferrer">
             <img src="/assets/icons/website-blue.svg" alt="Website Link"/>
           </a>
         </span>
         <p>I created this site to document my travels through Europe. I wanted to create a blog where we could write posts and also upload pictures we had. This porject was created with html, sass and php. I chose Wordpress initially becasue its an easy and organised way of writing posts, storing them and keeping track of them. This was my first project using the Wordpress format and php which came to be a big learning curve for me.</p>
         <Link to="/projects" className="mobile-backbtn">
         <img src="/assets/icons/arrow.svg" alt="back arrow"></img>
         Back to projects</Link>
       </div>
    </div>
  )
}


export default BouncingBorders;
