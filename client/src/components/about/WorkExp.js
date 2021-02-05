import React, { Fragment, useState } from 'react'



// Initiliase lastA variable to keep track if the same button as been clicked
var lastA;


const WorkExp = () => {
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
      <div className="table-row" style={rowIndex === 0 ? {height: "100%"} : {height : "70px"}}>
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Specsavers</p>
            <p className="date">November 2019 – July 2020</p>
          </span>
          <p className="course">Clinical Assistant</p>
          <button onClick={(e) => openInformation(e, 0)}>
            <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 0 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/></button>
            </div>
            <div className="course-info">
          <p>Being in a role solely focused on the customer has opened up my knowledge and developed my skills massively when it comes to customers. </p>
          <p>The role included many jobs which increased over the period of time working here through training and the amount of effort I put in. This gave me the ability to adapt to different roles due to many different types of jobs that had to be done in a day for example throughout the day I might have to check a patient in, perform a pretest to then finding the customers needs and preferences and finally advising them and fitting a pair of glasses. </p>
          <p>Throughout the job role I would learn different topics and new things to better my performance in the job role and then eventually became a massive asset to the team on sales and also customer experience.</p>
          <p>I also created bonds with many of my colleagues here and became a positive asset to the team.</p>
        </div>
      </div>
      <div className="table-row" style={rowIndex === 1 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">The Crafty Half</p>
            <p className="date">January – June 2019</p>
          </span>
          <p className="course">Bartender</p>
          <button onClick={(e) => openInformation(e, 1, 220)}>
            <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 1 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}} /></button>    
            </div>  
          <div className="course-info">
            <p>This role presented me face to face with customers where I had to be behind the bar taking orders, holding conversations and making sure the customer was satisified.</p>
            <p>The bar had to be kept at a high standard of cleanliness, professionalism while obtaining a certain atmosphere. Some shifts I was the only member of staff working so had to keep these standards up by myself which gave me responsibility and developed my professionalism.</p>
        </div>
      </div>
      <div className="table-row" style={rowIndex === 2 ? {maxHeight: "100%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper">
          <span className="left-wrapper">
            <p className="school">Pertemps, Coldcall</p>
            <p className="date">June – September 2018</p>
          </span>
          <p className="course">Delivery Driver</p>
          <button onClick={(e) => openInformation(e, 2, 260)}>
            <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 2 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}/></button>
        </div>  
          <div className="course-info">
            <p>My responsibilities within this role included delivering products to different Tesco petrol stations. I developed time management skills due to having to deliver the product at the slotted time.</p>
            <p>This role was my first experience interacting with customers although it wasn’t a customer service role. This helped to initially develop customer understanding skills.</p>
            <p>Not too long into the role I was given more responsibility where I had to do a unique route which included picking up food samples from factories and taking them to lab for testing.</p>
          </div>
      </div>
      <div className="table-row"style={rowIndex === 3 ? {maxHeight: "150%"} : {maxHeight : "70px"}}>
        <div className="row-wrapper">
            <span className="left-wrapper">
              <p className="school">Mamma Mia Restaurant </p>
              <p className="date">November 2012 - August 2017</p>
            </span>
            <p className="course">Sous Chef</p>
            <button onClick={(e) => openInformation(e, 3, 450)}>
              <img src="/assets/icons/down-arrow.svg" alt="Down Arrow" style={rowIndex === 3 ? { transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}} /></button>
          </div>
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
