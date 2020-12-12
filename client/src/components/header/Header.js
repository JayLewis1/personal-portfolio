import React , {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';

var previousRoute;

const Header = () => {

  // Use redux :  Create function to use on each component to set the state to their location
  const [exactRoute, setLocationRoute] = useState();
  
 var location = useLocation();

 const setLocationOnRouteChange = () => {
         setLocationRoute(location.pathname);
         console.log("hello");
 }

 if(location.pathname !== previousRoute ) {
  setLocationOnRouteChange();
}

 previousRoute = location.pathname;

 useEffect(() => {
  setLocationRoute(location.pathname);
 }, [setLocationRoute])

  return (
    <header>
      <nav>
        <ul>
          {location.pathname === "/projects" && 
          <li><Link to="/">home</Link></li>}
           {location.pathname === "/" && 
          <li><Link to="/projects">projects</Link></li>}
          {/* <li><Link to="/projects">projects</Link></li> */}
          <li><a href="/#about">about</a></li>
          <li><a href="/#contact" className="contact-link">contact</a></li>
        </ul>
      </nav>
      </header>
  )
}

export default Header;
