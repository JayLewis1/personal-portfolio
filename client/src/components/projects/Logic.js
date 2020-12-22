import React , { useEffect }from 'react';
import { Link } from "react-router-dom";

const Logic = () => {

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
       <img className="project-photo" src="/assets/project-photos/logic@2x.jpg" alt="Logic Website"/>
     </div>
     <div>
       <h3>Logic Trades</h3>
       <span className="link-container">
         <a href="https://github.com/JayLewis1/logic-trades">
           <img src="/assets/icons/github-blue.svg" alt="Github Link"/>
         </a>
         <a href="https://logictrades.herokuapp.com/">
           <img src="/assets/icons/website-blue.svg" alt="Website Link"/>
         </a>
       </span>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi. </p>
       <Link to="/projects" className="mobile-backbtn">
         <img src="/assets/icons/arrow.svg" alt="back arrow"></img>
         Back to projects</Link>
     </div>
  </div>
  )
}


export default Logic;
