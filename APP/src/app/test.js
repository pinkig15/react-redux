import React from "react";
import Header from './components/Header';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import StateList from "./components/states/components/StateList";

const App = () => (
  <Router>
    <div>
      <Header />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/states" component={StateList} />
    </div>
  </Router>
);

export default App;



