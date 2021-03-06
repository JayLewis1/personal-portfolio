import React from 'react'
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-flex">
          <li className="dirt-display">
              <img className="project-name" src="/assets/project-names/dirt-name.svg" alt="Dirt"/>
              <img  className="project-photo"src="/assets/project-photos/dirt-com.jpeg" alt="Dirt Page"/>
              <Link to="/projects/dirt" className="project-link"> 
              <img src="/assets/icons/arrow-left.svg" alt="Link to project" className="shake-animation"/></Link> 
              <div className="link-container">
                <a href="https://github.com/JayLewis1/dirt" className="shake-animation"> 
                  <img src="/assets/icons/github.svg" alt="Github Link"/> 
                </a>
                <a href="http://www.dirtaliceinchains.com/" className="shake-animation"> 
                  <img src="/assets/icons/website.svg" alt="Website Link"/>
                </a>
              </div>
          </li>
          <li className="bouncing-display">
              <img className="project-name" src="/assets/project-names/bouncing-name.svg" alt="Bouncing Borders"/>
                <img  className="project-photo"src="/assets/project-photos/bouncing-borders-com.jpeg" alt="Bouncing Borders Page"/>
                <Link to="/projects/bouncingborders" className="project-link"> 
                <img src="/assets/icons/arrow-left-pink.svg" alt="Link to project" className="shake-animation"/></Link> 
                <div className="link-container">
                  <a href="https://github.com/JayLewis1/bouncingborderswp" className="bb-links shake-animation"> 
                    <img src="/assets/icons/github-pink.svg" alt="Github Link"/> 
                  </a>
                  <a href="http://bouncingborders.com/" className="bb-links shake-animation"> 
                    <img src="/assets/icons/website-pink.svg" alt="Website Link"/>
                  </a> 
                </div>
          </li>
      </div>
      <div className="projects-flex">
        <li className="logic-display">
          <img className="project-name" src="/assets/project-names/logic-name.svg" alt="Logic"/>
                <img  className="project-photo"src="/assets/project-photos/logic-com.jpeg" alt="Logic Page"/>
                <Link to="/projects/logic" className="project-link"> 
                <img src="/assets/icons/arrow-left-orange.svg" alt="Link to project" className="shake-animation"/></Link> 
                <div className="link-container">
                  <a href="https://github.com/JayLewis1/logic-trades" className="shake-animation"> 
                    <img src="/assets/icons/github-orange.svg" alt="Github Link"/> 
                  </a>
                  <a href="https://logictrades.herokuapp.com/" className="shake-animation"> 
                    <img src="/assets/icons/website-orange.svg" alt="Website Link"/>
                  </a> 
                </div> 
          </li>
        <li className="see-all-projects">
            <h5>See all projects</h5>
            <a href="/"  className="all-projects-link" >
              <img src="/assets/icons/arrow-left-blue.svg" alt="Link to all projects"/>
            </a>
            <div className="all-projects-images">
              <img className="pro-1" src="/assets/project-photos/bouncing-borders-com.jpeg" alt="Bouncing Borders"/>
              <img className="pro-2" src="/assets/project-photos/logic-com.jpeg" alt="Logic"/>
              <img className="pro-3" src="/assets/project-photos/dirt-com.jpeg" alt="Dirt"/>
            </div>
        </li>
      </div>
    </div>
  )
}

export default Projects;
