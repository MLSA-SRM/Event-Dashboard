import React, { useState } from "react";
import Nav from "./components/nav";
import "./NewEvent.css";
import Axios from "axios";
const NewEvent = (props) => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    Axios.post("/newevent", {
      name,
      num,
      startDate,
      endDate,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setName("");
    setNum("");
  };
  const { username } = props;
  return (
    <div>
      <Nav username={username} />
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
                placeholder='Event Name'
                className='event-name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
              ></input>
            </div>
            <div className='input-field'>
              <input
                placeholder='Minimum Attendance'
                className='event-name'
                type='text'
                value={num}
                onChange={(e) => setNum(e.target.value)}
              ></input>
            </div>
            <div className='input-field'>
              <input
                placeholder='Start Event Date'
                className='event-date'
                type='text'
                onMouseEnter={(e) => (e.target.type = "date")}
                onMouseLeave={(e) => (e.target.type = "text")}
                onChange={(e) => setStartDate(e.target.value)}
              ></input>
            </div>
            <div className='input-field'>
              <input
                placeholder='End Event Date'
                className='event-date'
                type='text'
                onMouseEnter={(e) => (e.target.type = "date")}
                onMouseLeave={(e) => (e.target.type = "text")}
                onChange={(e) => setEndDate(e.target.value)}
              ></input>
            </div>
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
