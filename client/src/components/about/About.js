import React, { useState }from 'react'

import Skills from "./Skills";
import WorkExp from "./WorkExp";
import Education from "./Education";

const About = () => {
  // Initialise section state to be skills using useState hook
  const [section , setSection] = useState("skills");

  // Update state function, used to display the correct about section
  const changeSection = (e) => {
    // Assign button value to value variable
    var value = e.target.value;
    // Update state with the value variable
    setSection(value);
  }
  return (
    <div className="about-container" id="about">
        <ul className="table-header-buttons">
          <li>
            <button 
              value="skills" 
              onClick={(e) => changeSection(e)}
              className={section === "skills" ? "btnSelected" : undefined}>
              Skills
            </button></li>
          <li>
            <button 
             value="workexp" 
             onClick={(e) => changeSection(e)}
             className={section === "workexp" ? "btnSelected" : undefined}>
              Work Experience
            </button></li>
          <li>
            <button 
            value="education" 
            onClick={(e) => changeSection(e)}
            className={section === "education" ? "btnSelected" : undefined}>
              Education</button></li>
        </ul>
        <div className="table">
          {section === "skills" && <Skills />}
          {section === "workexp" && <WorkExp />}
          {section === "education" && <Education />}
        </div>
    </div>
  )
}

export default About;
