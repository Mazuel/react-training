import React from "react";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navigation from "./component/Navigation";
import Games from "./component/games/GameNavigation";
import Home from "./component/Home";
import TicTacToe from "./component/games/tictactoe/TicTacToe";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container className="p-3">
        <Jumbotron>
          <div className="App">
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/games/TicTacToe" component={TicTacToe} />
              <Route path="/games" exact component={Games} />
            </Switch>
          </div>
        </Jumbotron>
      </Container>
    </Router>
  );
}

export default App;
