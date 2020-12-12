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
import Footer from "./components/Footer";

 const App = ()  => {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      <Footer />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
