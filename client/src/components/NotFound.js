import React from 'react'
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
        <div>
          <img src="/assets/illustrations/404.svg" alt="404 Not Found"/>
          <h3>404 : Page Not Found</h3>
          <h4>You can go back home <NavLink to="/">here</NavLink></h4>
        </div>
    </div>
  )
}

export default NotFound;
