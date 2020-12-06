import React, { Fragment } from 'react'

var counter;
var lastA;
const Education = () => {

  const openInformation = (e, a) => {
   // Assigning the table variable with all the divs containing the "table-row" class. This results in the table variable being an array
   var table = document.getElementsByClassName("table-row");

   // Assigning rowIndex with the a variable which is a unique variable being passed to the function from the onClick event on each button
   var rowIndex = a;

  const openingRow = () => {
    // When counter is undefined or equaling to 0 the containers height will change
    if(counter === 0 || counter === undefined) {
      // Finding the selected div's index in the table array and assigning it with an id which will change the height of div and effectively act as a dropdown
      if(rowIndex !== 2) {
        table[rowIndex].setAttribute("id", "enlarge-height-edu");
      } else {
        table[rowIndex].setAttribute("id", "enlarge-height-larger");
      }
      // Returning the counter while assigning it a value of 1 ready for the next button click  
      return counter = 1;
    } else {
      // When the counter is not set to 0 or undefined then the selected "table-row" will have the id removed and close the drop down;
      table[rowIndex].removeAttribute("id");
       // Returning the counter while assigning it a value of 0 ready for the next button click 
      return counter = 0;
    }
  
   }

   const tableLoop = () => {
    // Looping through the table array
      for(var x = 0; x < table.length ; x++) {
        // If any "table-row" divs have been assigned an id we will remove them here before a different row has been selected
        if(table[x].id !== 'undefined')  {
          table[x].removeAttribute("id");
        }
      }
  }

  // lastA is a variable holding the last clicked a value
  // If lastA has been assigned a value then carry out the statement
   if(lastA !== undefined) {
      // If the lastA is the same value as a then open the current selected row
      if(lastA === a) {
        openingRow();
      } else { 
      // If the lastA is NOT the same value as a 
      // Reset couter
        counter = 0;
        // Call the tableLoop function which will remove any ID's another div/row may have, effectively closing them before opening the new row
        tableLoop();
        // Calling openingRow to open the selected row;
        openingRow();
      }
     // Assigning lastA with the current a value;
     lastA = a;
     return  counter;
   } else {
    // If lastA hasn't been assigned open the selected row
     openingRow();
   }
   // Assigning lastA with the current a value;
   lastA = a;
  }

  return (
    <Fragment>
      <div className="table-row">
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Plymouth University</p>
            <p className="date">September 2016 - September 2019</p>
          </span>
          <p className="course">Internet Design BA Hons : 2:1</p>
          <button onClick={(e) => openInformation(e, 0)}><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <div></div>
        <div className="course-info">
          <p>The role included many jobs which increased over the period of time working here through training and the amount of effort I put in. This gave me the ability to adapt to different roles due to many different types of jobs that had to be done in a day for example throughout the day I might have to arrive a patient in, preform a pretest to then finding the customers needs and preferences and finally advising them and fitting a pair of glasses. </p>
        </div>
      </div>
      <div className="table-row">
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Chepstow School Sixth Form - A Level</p>
            <p className="date">September 2014 - August 2016</p>
          </span>
          <p className="course">Business Studies : B</p>
          <button onClick={(e) => openInformation(e, 1)}><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <div></div>
        <ul className="list-of-grades">
          <li><p>Business Studies</p> <p className="grade">B</p></li>
          <li><p>ICT</p> <p className="grade">C</p></li>
          <li><p>Welsh Baccalaureate</p> <p className="grade">B</p></li>
        </ul>
      </div>
      <div className="table-row">
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Chepstow School - GCSE</p>
            <p className="date">September 2009 - August 2016</p>
          </span>
          <p className="course">English Language : B</p>
          <button onClick={(e) => openInformation(e, 2)}><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
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
