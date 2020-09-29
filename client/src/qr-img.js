import React, { Component } from "react";
import logo from './images/qr.png';

class qri extends Component { 
    render() {
      return (
          <div className="App">
             <img src={logo} alt="qr"/>
          </div>
      );
    }
  }
   
  export default qri; 