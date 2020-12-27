 import  { 
  BrowserRouter as Router, 
  Switch, 
  Route
 } from "react-router-dom";

 // Redux
 import { Provider } from "react-redux";
 import store from "./redux/store";


import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Dirt from "./components/projects/Dirt";
import BouncingBorders from "./components/projects/BouncingBorders";
import Logic from "./components/projects/Logic";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

 const App = ()  => {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/dirt" component={Dirt} />
          <Route exact path="/projects/bouncingborders" component={BouncingBorders} />
          <Route exact path="/projects/logic" component={Logic} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
