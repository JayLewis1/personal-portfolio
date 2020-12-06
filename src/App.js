 import  { 
  BrowserRouter as Router, 
  Switch, 
  Route
 } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";

 const App = ()  => {
  return (
    <Router>
    <div className="App">
    <Header />
      <Switch>
        <Route path="/">
         <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
