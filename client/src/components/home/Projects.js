import React from 'react'

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-flex">
          <li className="dirt-display">
              <img className="project-name" src="/assets/project-names/dirt-name.svg" alt="Dirt"/>
              <img  className="project-photo"src="/assets/project-photos/dirt@2x.jpg" alt="Dirt Page"/>
              <a href="/" className="project-link"> 
              <img src="/assets/icons/arrow-left.svg" alt="Link to project" className="shake-animation"/></a> 
              <div className="link-container">
                <a href="/" className="shake-animation"> 
                  <img src="/assets/icons/github.svg" alt="Github Link"/> 
                </a>
                <a href="/" className="shake-animation"> 
                  <img src="/assets/icons/website.svg" alt="Website Link"/>
                </a>
              </div>
          </li>
          <li className="bouncing-display">
              <img className="project-name" src="/assets/project-names/bouncing-name.svg" alt="Bouncing Borders"/>
                <img  className="project-photo"src="/assets/project-photos/bouncing-borders@2x.jpg" alt="Bouncing Borders Page"/>
                <a href="/" className="project-link"> 
                <img src="/assets/icons/arrow-left-pink.svg" alt="Link to project" className="shake-animation"/></a> 
                <div className="link-container">
                  <a href="/" className="bb-links" className="shake-animation"> 
                    <img src="/assets/icons/github-pink.svg" alt="Github Link"/> 
                  </a>
                  <a href="/" className="bb-links" className="shake-animation"> 
                    <img src="/assets/icons/website-pink.svg" alt="Website Link"/>
                  </a> 
                </div>
          </li>
      </div>
      <div className="projects-flex">
        <li className="logic-display">
          <img className="project-name" src="/assets/project-names/logic-name.svg" alt="Logic"/>
                <img  className="project-photo"src="/assets/project-photos/logic@2x.jpg" alt="Logic Page"/>
                <a href="/" className="project-link"> 
                <img src="/assets/icons/arrow-left-orange.svg" alt="Link to project" className="shake-animation"/></a> 
                <div className="link-container">
                  <a href="/" className="shake-animation"> 
                    <img src="/assets/icons/github-orange.svg" alt="Github Link"/> 
                  </a>
                  <a href="/" className="shake-animation"> 
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
              <img className="pro-1" src="/assets/project-photos/bouncing-borders@2x.jpg" alt="Bouncing Borders"/>
              <img className="pro-2" src="/assets/project-photos/logic@2x.jpg" alt="Logic"/>
              <img className="pro-3" src="/assets/project-photos/dirt@2x.jpg" alt="Dirt"/>
            </div>
        </li>
      </div>
    </div>
  )
}

export default Projects;
