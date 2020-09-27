import React from "react";
import NewNav from "./newnav";
import "./addevent.css";
import ScriptTag from "react-script-tag";

//event name
//event desc
//max attendance
//date
//time

const AddEvent = () => {
  return (
    <div>
      <NewNav />
      <ScriptTag type="text/javascript" src="script.js" />
      <div className="form-body">
        <h1 className="header-form">Let's get your event setup</h1>
        <p className="form-subtext">Fill in the details to get started!</p>
        <div className="form-container">
          <form action="">
            <div className="input-div">
              <h5 className="label">Event Name</h5>
              <input className="input" type="text"></input>
            </div>
            <div className="input-div">
              <h5 className="label">Maximum Attendance</h5>
              <input className="input" type="number"></input>
            </div>
            <div className="input-div">
              <h5 className="label">Event Start Date</h5>
              <input className="input" type="date"></input>
            </div>
            <div className="input-div">
              <h5 className="label">Event End Date</h5>
              <input className="input" type="date"></input>
            </div>
            <div className="input-div">
              <h5 className="label">Event Start Time</h5>
              <input className="input" type="time"></input>
            </div>
            <div className="input-div">
              <h5 className="label">Event End Time</h5>
              <input className="input" type="time"></input>
            </div>
            <input className="button" type="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
