import React, { Component } from "react"; 

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="black-colour">
          <h4>CONTACT INFORMATION</h4>
          <hr/>
          <ul>
            <div className="left">
            <li>Phone : +91 00000 00000</li>
            </div>
            <div className="middle">
            <li>Email : abc@gmail.com</li>
            </div>
            <div className="right">
            <li>Handels : Instagram</li>
            </div>
          </ul>
          </div>
      </React.Fragment>
    );
  }
}
 
export default Contact; 