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
          <br/>
          <span className="thumbnail col-md-4">
          <img src={logo1} height="100vh" width="300vh" alt="logo1" className="image"/>
          <div className="overlay">
          <div className="text">et molestie ac feugiat sed lectus vestibulum mattis ullamcorper</div>
          </div>
          </span>
          <span className="thumbnail col-md-4">
          <img src={logo2} height="100vh" width="300vh" alt="logo2"/>
          <div className="overlay-middle">
          <div className="text">et molestie ac feugiat sed lectus vestibulum mattis ullamcorper</div>
          </div>
          </span>
          <span className="thumbnail col-md-4">
          <img src={logo3} height="100vh" width="300vh" alt="logo3"/>
          <div className="overlay-right">
          <div className="text">et molestie ac feugiat sed lectus vestibulum mattis ullamcorper</div>
          </div>
          </span>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default Stuff; 