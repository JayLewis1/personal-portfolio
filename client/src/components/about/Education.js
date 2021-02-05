import React, { Fragment, useState } from 'react'


// Initiliase lastA variable to keep track if the same button as been clicked
var lastA;


const Education = () => {
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
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Plymouth University</p>
            <p className="date">September 2016 - September 2019</p>
          </span>
          <p className="course">Internet Design BA Hons : 2:1</p>
          <button onClick={(e) => openInformation(e, 0)}>
           <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 0 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/>
          </button>
        </div>
        <div></div>
        <div className="course-info">
          <p>This course introduced </p>
        </div>
      </div>
      <div className="table-row" id="sixth-form"style={rowIndex === 1 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Chepstow School Sixth Form <span className="hide">- A Level</span></p>
            <p className="date">September 2014 - August 2016</p>
          </span>
          <p className="course">Business Studies : B</p>
          <button onClick={(e) => openInformation(e, 1)}>
           <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 1 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/>
          </button>
        </div>
        <div></div>
        <ul className="list-of-grades">
          <li><p>Business Studies</p> <p className="grade">B</p></li>
          <li><p>ICT</p> <p className="grade">C</p></li>
          <li><p>Welsh Baccalaureate</p> <p className="grade">B</p></li>
        </ul>
      </div>
      <div className="table-row" style={rowIndex === 2 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Chepstow School - GCSE</p>
            <p className="date">September 2009 - August 2016</p>
          </span>
          <p className="course">English Language : B</p>
          <button onClick={(e) => openInformation(e, 2)}>
            <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 2 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/>
          </button>
        </div>
        <div></div>
        <ul className="list-of-grades">
          <li><p>English Language</p> <p className="grade">B</p></li>
          <li><p>English Literature</p> <p className="grade">C</p></li>
          <li><p>Math</p> <p className="grade">B</p></li>
          <li><p>Science</p> <p className="grade">C</p></li>
          <li><p>Business Studies</p> <p className="grade">B</p></li>
          <li><p>Resistant Materials</p> <p className="grade">A</p></li>
          <li><p>History</p> <p className="grade">D</p></li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Education;
