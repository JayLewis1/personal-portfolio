import React, { Fragment } from 'react'

var counter;
var lastA;
const WorkExp = () => {

  const openInformation = (e, a) => {
   // Assigning the table variable with all the divs containing the "table-row" class. This results in the table variable being an array
   var table = document.getElementsByClassName("table-row");

   // Assigning rowIndex with the a variable which is a unique variable being passed to the function from the onClick event on each button
   var rowIndex = a;

  const openingRow = () => {
    // When counter is undefined or equaling to 0 the containers height will change
    if(counter === 0 || counter === undefined) {
      // Finding the selected div's index in the table array and assigning it with an id which will change the height of div and effectively act as a dropdown
      if(rowIndex === 1 || rowIndex === 2 ) {
        table[rowIndex].setAttribute("id", "enlarge-height-edu");
      } else {
        table[rowIndex].setAttribute("id", "enlarge-height-exp");
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
            <p className="school">Specsavers</p>
            <p className="date">November 2019 – July 2020</p>
          </span>
          <p className="course">Clinical Assistant</p>
          <button onClick={(e) => openInformation(e, 0)}><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <div></div>
        <div className="course-info">
          <p>Being in a role solely focused on the customer has opened up my knowledge and developed my skills massively when it comes to customers. </p>
          <p>The role included many jobs which increased over the period of time working here through training and the amount of effort I put in. This gave me the ability to adapt to different roles due to many different types of jobs that had to be done in a day for example throughout the day I might have to arrive a patient in, preform a pretest to then finding the customers needs and preferences and finally advising them and fitting a pair of glasses. </p>
          <p>Throughout the job role I would learn different topics and new things to better my performance in the job role and then eventually became a massive asset to the team on sales and also customer experience.</p>
          <p>I also created bonds with many of my colleagues here and became a positive asset to the team.</p>
        </div>
      </div>
      <div className="table-row">
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">The Crafty Half / Hyde Park Pub </p>
            <p className="date">January – June 2019</p>
          </span>
          <p className="course">Bartender</p>
          <button onClick={(e) => openInformation(e, 1)}><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <div></div>
        <div className="course-info">
          <p>This role presented me face to face with customers where I had to be behind the bar taking orders, holding conversations and making sure the customer </p>
          <p>The bar had to be kept at a high standard of cleanliness, professionalism while obtaining a certain atmosphere. Some shifts I was the only member staff working so had to keep these stands up by myself which gave me responsibility and developed my professionalism.</p>
        </div>
      </div>
      <div className="table-row">
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Pertemps, Coldcall</p>
            <p className="date">June – September 2018</p>
          </span>
          <p className="course">Delivery Driver</p>
          <button onClick={(e) => openInformation(e, 2)}><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <div></div>
        <div className="course-info">
          <p>My responsibilities within this role included delivering products to different Tesco petrol stations. I developed time management skills due to having to deliver the product at the slotted time.</p>
          <p>This role was my first experience interacting with customers although it wasn’t a customer service roll. This helped to initially develop customer understanding skills.</p>
          <p>Not too long into the role I was given more responsibility where I had to do a unique route which included picking up food samples from factories and taking them to lab for testing.</p>
        </div>
      </div>
      <div className="table-row">
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Mamma Mia Restaurant </p>
            <p className="date">November 2012 - August 2017</p>
          </span>
          <p className="course">Sous Chef</p>
          <button onClick={(e) => openInformation(e, 3)}><img src="/assets/icons/down-arrow.svg" alt="Down Arrow"/></button>
        </div>
        <div></div>
        <div className="course-info">
          <p>At the age of 15 I was keen and intrigued to see what the working world was like so I threw myself into a part-time job. This is where my work ethic, ethos and whole attitude towards work began and further developed through the years working at this restaurant. </p>
          <p>Initially my job role was Kitchen Porter this involved me carrying out washing and cleaning tasks. I developed a keen work ethic and a selection of skills such as organisation, time management and team working throughout this job role. I also created strong relationships with my colleagues that I still have to this day.</p>
          <p>I transitioned into the Sous Chef role after 1-2 years of working at the restaurant due to the owners seeing potential in me. This job role developed new skills such as working under pressure due to being in the middle of a fast paced kitchen with the duty of making sure every dish comes out on time and having to coordinate the kitchen staff to make sure dishes come out together. This would develop my organisation, coordinating and communication skills.</p>
          <p>I attained more responsibility throughout this role, for example I was given the keys and had to open the restaurant up frequently.</p>
        </div>
      </div>

    </Fragment>
  )
}

export default WorkExp;
