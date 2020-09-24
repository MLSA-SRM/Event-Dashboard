import { ContentHook } from "@fullcalendar/react";
import React, { Component } from "react";



class box extends Component{ 
    
    constructor()
    {
        super();
        this.state={
            data: '',
        }
    }

    apple(event){
        this.setState({
            data: event.target.value,
        })
    }
 
    render() {
    return (
      <React.Fragment>
        
        <div>
            <h1>Enter whatever youo want to send in your email...</h1>
            <form>
                <textarea name="area" id="area" cols="50" rows="10" onChange={this.apple.bind(this)}></textarea>
            </form>
            <h1>{this.state.data}</h1>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default box;

