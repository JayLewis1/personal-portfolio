import React , {useState} from 'react'
import {NavLink } from 'react-router-dom';
import PropTypes from "prop-types";

import { connect } from "react-redux";

// var previousRoute = "";
var counter; 

const Header = ({routeLocation}) => {
  const [openNav , setNavMenu] = useState(false);


  const openNavMenu = () => {
    if( counter !== "open") {
      setNavMenu(true);
      return  counter = "open";
    } else {
      setNavMenu(false);
      return  counter = "closed";
    }
  }

  // Need to change state when route changes to close menu : CURRENTLY NOT WORKING
  const closeNavMenu = () => {
    setNavMenu(false);
  }

  return (
    <header>
      <nav>
        <ul>
           <li><NavLink exact activeClassName="active" to="/" onClick={() => closeNavMenu()}>home</NavLink></li>
           <li><NavLink exact activeClassName="active" to="/projects">projects</NavLink></li>
          <li><a href="/#about">about</a></li>
          <li><a href="/#contact" className="contact-link">contact</a></li>
        </ul>
      </nav>
      <button className="burger-icon" onClick={() => openNavMenu()}>
      <img src="/assets/icons/burger-menu.svg" alt="Burger Menu"/>
      </button>

      <div className="burger-menu" style={openNav === true ? { height: "270px" } : { height : "0"}}>
        <nav>
        <ul>
           <li><NavLink exact activeClassName="active" to="/" >home</NavLink></li>
           <li><NavLink exact activeClassName="active" to="/projects">projects</NavLink></li>
          <li><a href="/#about">about</a></li>
          <li><a href="/#contact" className="contact-link">contact</a></li>
        </ul>
      </nav>
      </div>
      </header>
  )
}

Header.propTypes = {
  routeLocation : PropTypes.object.isRequired
}

const MapStateToProps = (state) => ({
  routeLocation : state.exactRouteLocation
})

export default connect(MapStateToProps)(Header);
