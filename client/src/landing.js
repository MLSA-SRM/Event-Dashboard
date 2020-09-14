import React, { Component } from "react";
import logo from './images/img.jpg'; 

class Home extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="box">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci porta non.</p>
        </div>
        <div className="image-logo">
        <img src={logo} height="500vh" width="700vh" alt="logo"/>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Home;