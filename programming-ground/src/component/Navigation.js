import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navigation() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3>Programming grounds</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/Game">
          <li>Game</li>
        </Link>
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
