import React, { Component } from "react";
import logo from "./images/Calendar_SVG.svg";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Modal from "./a";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div  className="margin">
        <ul className='headera'>
          <li>
            <h1 className="ax">Event Dashboard</h1>
          </li>
          <div className='righty'>
            {/* <div className="pulse"/> */}
            <li>
            <Modal/>
            </li>
          </div>
        </ul>
        <div className='white-box'>
          <div className='box'>
            <h1>Introducing the latest in fast and accurate ways to organize events.</h1>
            <p>
              Join thousands of people in easily organising and managing events for your organisation. We will take care of all the grunt work no one wants to do.
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
        </div>
        </div>
          <Contact />
      </React.Fragment>
    );
  }
}

export default Home;
