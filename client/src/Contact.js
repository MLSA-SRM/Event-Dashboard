import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="black-colour">
          {/* <h4>CONTACT INFORMATION</h4>
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
          </ul> */}

          <center>
            <div className="share">
              <span className="a">
                <i className="fas fa-share-alt"></i> Share!
              </span>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <br/>
            <p>&copy; Microsoft Student Partner Club 2020</p>
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
