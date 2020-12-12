import React from 'react'

// Redux
import { connect } from "react-redux";

 const Footer = ({route}) => {
   // Use redux :  Create function to use on each component to set the state to their location

  return (
    <div className="footer">
      <nav>
           <ul>
             <li><a href="/">Top</a></li>
             {route.location === "/projects" &&  
             <li><a href="/">home</a></li>}
              {route.location === "/" &&  
             <li><a href="/projects">Projects</a></li>}
             {/* <li><a href="/portfolio">Projects</a></li> */}
             <li><a href="/#about">About</a></li>
             <li><a href="/#contact">Contact</a></li>
           </ul>
      </nav>
        <p>Site designed and developed by myself <span>Jay Lewis</span>.</p>
        <span className="github-wrapper"><img src="/assets/icons/github-blue.svg" alt="github"/><p>You can check out the code for this site <a href="/">here</a> 😀</p></span>
        <span className="flaticon-ref">
        {/* <img src="/assets/icons/freepik.svg" alt="Freepik"/> */}
          <p>Icons made by<a href="https://www.flaticon.com/authors/freepik" >Freepik</a> from <a href="https://www.flaticon.com/" >www.flaticon.com</a> </p></span>
    </div>
  )
}

const mapStateToProps = (state) => ({
  route : state.exactRouteLocation
})

export default connect(mapStateToProps)(Footer);