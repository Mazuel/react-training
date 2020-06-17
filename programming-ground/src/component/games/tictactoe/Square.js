import React from "react";
import "./tictactoe.css";

function Square(props) {
  if (props.winningLine && props.winningLine.includes(props.number)) {
    return (
      <button className="winningSquare" onClick={props.onClick}>
        {props.value}
      </button>
    );
  } else {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
}

export default Square;
