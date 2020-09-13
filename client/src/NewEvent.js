import React, { useState } from "react";
import Nav from "./components/nav";
import "./NewEvent.css";
import Axios from "axios";
const NewEvent = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const submit = (e) => {
    e.preventDefault();
    Axios.post("/newevent", {
      name,
      num,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setName("");
    setNum("");
  };
  return (
    <div>
      <Nav />
      <div className='body'>
        <div className='title-div'>
          <div className='title-svg'>
            <div className='add-image'>
              <p className='add-image-text'>Add Image +</p>
            </div>
          </div>
          <h1 className='title-header'>Let's get your event set up</h1>
          <p className='title-subtext'>Fill in the details to get started!</p>
        </div>
        <div className='form-div'>
          <h1 className='form-header'>Event Details</h1>
          <form onSubmit={submit}>
            <div className='input-field'>
              <input
                placeholder="Event Name"
                className="event-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
              ></input>
            </div>
            <div className='input-field'>
              <input
                placeholder="Minimum Attendance"
                className="event-name"
                value={num}
                type='text'
                onChange={(e) => setNum(e.target.value)}
              ></input>
            </div>
            {/* <div className='input-field'>
              <h1 className='form-field-header'>Event Date</h1>
              <input type='date'></input>
            </div>
            <div className='input-field'>
              <h1 className='form-field-header'>Event Time</h1>
              <input type='time'></input>
              <br />
            </div> */}
            <button className='form-button' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;
