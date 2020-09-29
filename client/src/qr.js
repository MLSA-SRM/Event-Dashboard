import React, { Component } from "react";
import Qri from './qr-img';

class qr extends Component { 
    state = {
        visible: false
    };
    render() {
      return (
          <div className="App">
              {this.state.visible ? <Qri/> : null}
              <label class="switch" >
            <input type="checkbox" onClick={()=> {
                  this.setState({visible: !this.state.visible});
              }}/>
            <span class="slider round"></span>
            </label>
          </div>
      );
    }
  }
   
  export default qr; 