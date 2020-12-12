import React, { useEffect } from 'react'

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
    <div>
        <h2>Projects Portfolio</h2>
    </div>
  )
}

Projects.propTypes = {
  setRouteLocation : PropTypes.func.isRequired
}

export default connect(null ,{setRouteLocation})(Projects);