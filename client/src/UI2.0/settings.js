import React from "react";
import AddEvent from "./addevent";
import NewNav from "./newnav";

const Settings = () => {
  return (
    <div>
      <NewNav />
      <div className="form-body">
        <h1 className="header-form">Edit event details </h1>
        <p className="form-subtext">Made a mistake? No worries, you can change your event settings here!</p>
        <div className="form-container">
          <form onSubmit="">
            <div className="input-div">
              <h5 className="label">Event Name</h5>
              <input
                className="input"
                type="text"
              ></input>
            </div>
            <div className="input-div">
              <h5 className="label">Maximum Attendance</h5>
              <input
                className="input"
                type="number"
              ></input>
            </div>
            <div className="input-div">
              <h5 className="label">Event Start Date</h5>
              <input
                className="input"
                type="datetime-local"
              ></input>
            </div>
            <div className="input-div">
              <h5 className="label">Event End Date</h5>
              <input
                className="input"
                type="datetime-local"
              ></input>
            </div>
            {/* <div className='input-div'>
              <h5 className='label'>Event Start Time</h5>
              <input className='input' type='time'></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Event End Time</h5>
              <input className='input' type='time'></input>
            </div> */}
            <button className="button">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
