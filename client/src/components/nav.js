import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <h3 className="navlogo">Event Dashboard</h3>
        <ul>
          <li className="navitem">
            <Link className="navLink">Dashboard</Link>
          </li>
          <Link className="navLink" to="/logIn">
            <li className="navitem">Login</li>
          </Link>

          <Link className="navLink" to="/signIn">
            <li className="navitem">Sign Up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
