import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="navStyle">
      <Link style={navStyle} to="/">
        <h3>Programming grounds</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/games">
          <li>Games</li>
        </Link>
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
