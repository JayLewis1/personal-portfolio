import React, { Fragment } from 'react'

var counter;
var lastA;
const Skills = () => {

  const openInformation = (e, a) => {
   // Assigning the table variable with all the divs containing the "table-row" class. This results in the table variable being an array
   var table = document.getElementsByClassName("table-row");

   // Assigning rowIndex with the a variable which is a unique variable being passed to the function from the onClick event on each button
   var rowIndex = a;

  const openingRow = () => {
    // When counter is undefined or equaling to 0 the containers height will change
    if(counter === 0 || counter === undefined) {
      // Finding the selected div's index in the table array and assigning it with an id which will change the height of div and effectively act as a dropdown
      table[rowIndex].setAttribute("id", "enlarge-height");;
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
          <p className="topic">Front-end Development</p>
          <p className="skill">HTML</p>
          <button onClick={(e) => openInformation(e, 0)} value="front-end"><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
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
      <div className="table-row">
        <div className="row-wrapper">
          <p className="topic">Back-end Development</p>
          <p className="skill">Node.js</p>
          <button onClick={(e) => openInformation(e, 1)} value="back-end"><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <ul className="list-of-skills">
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div className="table-row">
        <div className="row-wrapper">
          <p className="topic">Frameworks</p>
          <p className="skill">React</p>
          <button onClick={(e) => openInformation(e, 2)} value="frameworks"><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <ul className="list-of-skills">
          <li>React</li>
        </ul>
      </div>
      <div className="table-row">
        <div className="row-wrapper">
          <p className="topic">Design</p>
          <p className="skill">Adobe XD</p>
          <button onClick={(e) => openInformation(e, 3)} value="design"><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <ul className="list-of-skills">
          <li>Adobe XD</li>
          <li>Adobe Illustrator</li>
        </ul>
      </div>
      <div className="table-row">
        <div className="row-wrapper">
            <p className="topic">Version Control</p>
            <p className="skill">Github</p>
            <button onClick={(e) => openInformation(e, 4)} value="version"><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <ul className="list-of-skills">
          <li>Github</li>
        </ul>
      </div>
      <div className="table-row">
        <div className="row-wrapper">
          <p className="topic">Database</p>
          <p className="skill">MongoDB</p>
          <button onClick={(e) => openInformation(e, 5)} value="database"><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
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
