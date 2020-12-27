import React from 'react'
import { NavLink } from "react-router-dom";

// Redux
import { connect } from "react-redux";

 const Footer = ({route}) => {
   // Use redux :  Create function to use on each component to set the state to their location
  return (
    <div className="footer">
      <nav>
        <ul>
          <li><a href="/">Top</a></li>
          <li><NavLink exact activeClassName="footerActive" to="/">Home</NavLink></li>
          <li><NavLink exact activeClassName="footerActive" to="/projects">Projects</NavLink></li>
          <li><NavLink to="/#about">About</NavLink></li>
          <li><NavLink to="/#contact">Contact</NavLink></li>
        </ul>
      </nav>
        <span className="github-wrapper"><img src="/assets/icons/github-no-bg.svg" alt="github"/><p>You can check out the code for this site <a href="/">here</a> 😀</p></span>
        <span className="flaticon-ref">
          <p>Icons made by<a href="https://www.flaticon.com/authors/freepik" >Freepik</a> from <a href="https://www.flaticon.com/" >www.flaticon.com</a> </p>
        </span>
    </div>
  )
}

const mapStateToProps = (state) => ({
  route : state.exactRouteLocation
})

export default connect(mapStateToProps)(Footer);