import React, { useEffect } from 'react'

import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { setRouteLocation } from "../../redux/actions/exactRouteLocation";

import { useLocation } from 'react-router-dom';

const Introduction = ({ setRouteLocation }) => {

    // Find the page location using react-router-dom
    var location = useLocation();
    // Assign the location pathname to a variable ready to be passed through reduc function
    var exactRoute = location.pathname;
  
    useEffect(() => {
      // Pass the exactRoute to redux function : setRouteLocation, which should result as the pathname "/projects"
      setRouteLocation(exactRoute);
    }, [setRouteLocation, exactRoute])
  
    
  return (
    <div className="introduction-container">
      <div className="title-wrapper">
        <h1>Jay Lewis</h1>
        <p>Front-end Web Developer</p>
        <button>Take a look <img src="/assets/icons/arrow.svg" alt="arrow"></img></button>
        <div>
          <a href="/">
            <img src="/assets/icons/github-bluebg.svg" alt="Github"/>
          </a>
          <a href="/">
            <img src="/assets/icons/linkedin-bluebg.svg" alt="LinkedIn"/>
          </a>
        </div> 
      </div>
      <div className="illustration-con">
        <img src="/assets/illustrations/home.svg" alt="Laptop imgage"/>
      </div>
    </div>
  )
}


Introduction.propTypes = {
  setRouteLocation : PropTypes.func.isRequired
}


export default connect(null , {setRouteLocation} )(Introduction);
