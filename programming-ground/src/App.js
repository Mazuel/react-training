import React, { Component } from "react";
import Game from "./components/TicTac/Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Programming grounds!</h1>
        <Game />
      </div>
    );
  }
}

export default App;
