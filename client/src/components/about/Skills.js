import React, { Fragment, useState } from 'react'

// Initiliase lastA variable to keep track if the same button as been clicked
var lastA;

const Skills = () => {
  const [rowIndex, setRow] = useState();

  const openInformation = (e, a) => {
    // If the same button "row" has been clicked then set the selected row to empty meaning the row will close 
    if(lastA === a ) {
      setRow();
      // Setting lastA as an empty string
      lastA = "";
    } else {
      // If it's the first time clicking the button or if the row has been closed then set the row state to the appropiate row indicater - opens the row 
      setRow(a);
       // Setting lastA as the selected a 
      lastA = a;
    }
  }

  return (
    <Fragment>
      <div className="table-row" style={rowIndex === 0 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper skill-wrapper">
          <p className="topic">Front-end Development</p>
          <p className="skill">HTML</p>
          <button onClick={(e) => openInformation(e, 0)} value="front-end">  <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 0 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/></button>
        </div>
        <ul className="list-of-skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Sass</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
      </div>
           <div className="table-row" style={rowIndex === 1 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper skill-wrapper">
          <p className="topic">Back-end Development</p>
          <p className="skill">Node.js</p>
          <button onClick={(e) => openInformation(e, 1)} value="back-end">  <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 1 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/></button>
        </div>
        <ul className="list-of-skills">
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
        </ul>
      </div>
           <div className="table-row" style={rowIndex === 2 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper skill-wrapper">
          <p className="topic">Frameworks</p>
          <p className="skill">React</p>
          <button onClick={(e) => openInformation(e, 2)} value="frameworks"> 
          <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 2 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/></button>
        </div>
        <ul className="list-of-skills">
          <li>React</li>
        </ul>
      </div>
           <div className="table-row" style={rowIndex === 3 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper skill-wrapper">
          <p className="topic">Design</p>
          <p className="skill">Adobe XD</p>
          <button onClick={(e) => openInformation(e, 3)} value="design">  <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 3 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/></button>
        </div>
        <ul className="list-of-skills">
          <li>Adobe XD</li>
          <li>Adobe Illustrator</li>
        </ul>
      </div>
           <div className="table-row" style={rowIndex === 4 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper skill-wrapper">
            <p className="topic">Version Control</p>
            <p className="skill">Github</p>
            <button onClick={(e) => openInformation(e, 4)} value="version">  <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 4 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/></button>
        </div>
        <ul className="list-of-skills">
          <li>Github</li>
        </ul>
      </div>
           <div className="table-row" style={rowIndex === 5 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper skill-wrapper">
          <p className="topic">Database</p>
          <p className="skill">MongoDB</p>
          <button onClick={(e) => openInformation(e, 5)} value="database">  <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 5 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/></button>
        </div>
        <ul className="list-of-skills">
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Skills;
