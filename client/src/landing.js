import React, { Component } from "react";
import logo from "./images/Calendar_SVG.svg";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Modal from "./a";
import { TiThLarge } from "react-icons/ti";
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
            <h1 className="bx"><TiThLarge className="" style={{top: '4.7px',position: 'relative'}}/>  Event Dashboard</h1>
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
            <h1>Introducing a fast and efficient way to organize events.</h1>
            <p>
              Join many other people in easily organising and managing events for your organisation - all that without breaking a sweat.
            </p>
          </div>
          <div className='image-logo'>
            <img src={logo} height='500vh' width='700vh' alt='logo' />
          </div>
          {/* <div className="container5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="img-box"></div>
          </div> */}
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
