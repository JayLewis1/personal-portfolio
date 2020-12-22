import React , {useState, useEffect} from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom';

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
           <li><NavLink exact activeClassName="active" to="/" >home</NavLink></li>
           <li><NavLink exact activeClassName="active" to="/projects">projects</NavLink></li>
          <li><a href="/#about">about</a></li>
          <li><a href="/#contact" className="contact-link">contact</a></li>
        </ul>
      </nav>
      </header>
  )
}

export default Header;
