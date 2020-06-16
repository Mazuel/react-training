import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  color: "white",
};

function ListItem(props) {
  return (
    <Link style={navStyle} to={`/games/${props.value}`}>
      <li>{props.value}</li>
    </Link>
  );
}

function GameNavigation() {
  const games = ["TicTacToe", "Tetris", "Sudoku", "Snake"];
  const listItems = games.map((game) => (
    <ListItem key={game.toString()} value={game} />
  ));
  return (
    <div>
      <h1>Games</h1>
      <nav className="gameNavStyle">
        <ul>{listItems}</ul>
      </nav>
    </div>
  );
}

export default GameNavigation;
