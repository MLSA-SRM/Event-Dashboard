import React, { Component } from "react";
import logo1 from './images/#2.jpg';
import logo2 from './images/#3.jpg';
import logo3 from './images/image.jpg';

class Stuff extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="stuff">
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
        </div> */}
        <br/>
        <br/>
        <div className="title">
          <h1>We help you reach people</h1>
        </div>
        <div className="row">
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