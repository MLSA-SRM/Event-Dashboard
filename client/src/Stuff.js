import React, { Component } from "react";
import logo1 from './images/Business_PNG.png';
import logo2 from './images/Coding_PNG.png';
import logo3 from './images/Web_design_PNG.png';

class Stuff extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="title">
          
        </div>
        <div className="row">
          <h1 className="title">We help you reach people</h1>
          <span className="thumbnail col-md-4">
          <img src={logo1} height="100vh" width="300vh" alt="logo1"/>
          <h4>et molestie ac feugiat sed lectus vestibulum mattis ullamcorper</h4>
          </span>
          <span className="thumbnail col-md-4">
          <img src={logo2} height="100vh" width="300vh" alt="logo2"/>
          <h4>et molestie ac feugiat sed lectus vestibulum mattis ullamcorper</h4>
          </span>
          <span className="thumbnail col-md-4">
          <img src={logo3} height="100vh" width="300vh" alt="logo3"/>
          <h4>et molestie ac feugiat sed lectus vestibulum mattis ullamcorper</h4>
          </span>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default Stuff; 