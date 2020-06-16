import React from "react";
import "./App.css";
import Navigation from "./component/Navigation";
import Games from "./component/games/GameNavigation";
import Home from "./component/Home";
import TicTacToe from "./component/games/tictactoe/TicTacToe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/games/TicTacToe" component={TicTacToe} />
          <Route path="/games" exact component={Games} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
