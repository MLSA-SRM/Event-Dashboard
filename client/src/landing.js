import React, { Component } from "react";
import logo from "./images/Calendar_SVG.svg";
import Stuff from "./Stuff";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className='headera'>
          <li>
            <h1>Microsoft</h1>
          </li>
          <div className='righty'>
            {/* <div className="pulse"/> */}
            <li>
              <NavLink to='/login'>Log In</NavLink>
            </li>
          </div>
        </ul>
        <div className='white-box'>
          <div className='box'>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Imperdiet proin fermentum leo vel orci porta non.
            </p>
          </div>
          <div className='image-logo'>
            <img src={logo} height='500vh' width='700vh' alt='logo' />
          </div>
        </div>
        <div className='black-box'>
          <Stuff />
        </div>
        <div>
          <Contact />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
