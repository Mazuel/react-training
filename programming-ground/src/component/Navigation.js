import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Navigation() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="navStyle">
      <Link style={navStyle} to="/">
        <Button>Programming grounds</Button>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/games">
          <li>
            <Button>Games</Button>
          </li>
        </Link>
        <Link style={navStyle} to="/About">
          <li>
            <Button>About</Button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
