import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { setRouteLocation } from "../../redux/actions/exactRouteLocation";

import { useLocation } from 'react-router-dom';

const Projects = ({setRouteLocation}) => {

  // Find the page location using react-router-dom
  var location = useLocation();
  // Assign the location pathname to a variable ready to be passed through reduc function
  var exactRoute = location.pathname;

  useEffect(() => {
    // Pass the exactRoute to redux function : setRouteLocation, which should result as the pathname "/projects"
    setRouteLocation(exactRoute);
  }, [setRouteLocation, exactRoute])
  
  return (
    <div className="portfolio-container">
       <h3>My Portfolio</h3>
       <ul className="portfolio-grid">
          <li>
            <Link to="/projects/dirt">
             <img src="/assets/project-photos/dirt-com.jpeg" alt="Dirt Website"/>  
            </Link>
          </li>  
          <li>
            <Link  to="/projects/bouncingborders">
             <img src="/assets/project-photos/bouncing-borders-com.jpeg" alt="Bouncing Borders Website"/>  
            </Link>
          </li>  
          <li>
            <Link  to="/projects/logic">
              <img src="/assets/project-photos/logic-com.jpeg" alt="Logic Website"/>
            </Link>  
          </li>  
       </ul>
    </div>
  )
}

Projects.propTypes = {
  setRouteLocation : PropTypes.func.isRequired
}

export default connect(null ,{setRouteLocation})(Projects);