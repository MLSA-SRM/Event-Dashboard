import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbo">
          <h2>Contact Us</h2>
        </div>
        <div>
          <div className="net net-left">
            <h4>You could give us a call and clearify your doubt on <b>+91 00000 00000</b> , <b>+91 11111 11111</b> , <b>+91 22222 22222</b></h4>
          </div>
          <div className="net net-right">
          <h4>You could send us an email and we promise to get right back to you. Try <b>abc@gmail.com</b> , <b>xyz@gmail.com</b> , <b>fgh@gmail.com</b></h4>
          </div>
          <div className="net net-left">
          <h4>Or in any case if you just want to know more about work, follow us on our handels. <b>Instagram</b> , <b>Twitter</b> , <b>Facebook</b></h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Contact;