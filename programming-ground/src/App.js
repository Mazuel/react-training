import React from "react";
import "./App.css";
import Navigation from "./component/Navigation";
import Game from "./component/Game";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
