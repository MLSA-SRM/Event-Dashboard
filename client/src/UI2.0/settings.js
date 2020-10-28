import React, { useEffect, useState } from "react";
import axios from "axios";
import NewNav from "./newnav";
import { ToastContainer, toast } from "react-toastify";

const Settings = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [venue, setVenue] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState({});

  // Formating the dates by removing seconds and milliseconds
  let currentDate = new Date().toISOString();
  let currentDateFormat = currentDate.replace(/:[^:]*$/, "");

  let newStartDate = new Date(startDate).toISOString();
  let newStartDateFormat = newStartDate.replace(/:[^:]*$/, "");

  let newEndDate = new Date(endDate).toISOString();
  let newEndDateFormat = newEndDate.replace(/:[^:]*$/, "");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("test"));
    axios
      .post("/getevent", {
        data: data.data,
      })
      .then((res) => {
        setData({
          id: res.data.id,
          name: res.data.name,
          attendence: res.data.attendence,
          venue: res.data.venue,
          startDate: new Date(res.data.startDate),
          endDate: new Date(res.data.endDate),
        });
        setName(res.data.name);
        setNum(res.data.attendence);
        setVenue(res.data.venue);
        setStartDate(res.data.startDate);
        setEndDate(res.data.endDate);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/editevent", {
        id: data.id,
        name,
        num,
        venue,
        startDate,
        endDate,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
      notify();
  };
  return (
    <div style={{ padding: "4vh" }}>
      <NewNav />
      <div className='form-body'>
        <h1 className='header-form'>Edit event details </h1>
        <p className='form-subtext'>
          Made a mistake? No worries, you can change your event settings here!
        </p>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div className='input-div'>
              <h5 className='label'>Event Name</h5>
              <input
                required
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Maximum Attendance</h5>
              <input
                required
                className='input'
                value={num}
                onChange={(e) => setNum(e.target.value)}
                type='number'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Venue</h5>
              <input
                required
                className='input'
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                type='text'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Event Start Date</h5>
              <input
                required
                min={currentDateFormat}
                className='input'
                value={newStartDateFormat}
                onChange={(e) => setStartDate(e.target.value)}
                type='datetime-local'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Event End Date</h5>
              <input
                className='input'
                required
                min={newStartDateFormat}
                value={newEndDateFormat}
                onChange={(e) => setEndDate(e.target.value)}
                type='datetime-local'
              ></input>
            </div>
            <button className='button'>Save</button>
          </form>
        </div>
        <ToastContainer position={"top-center"} />
      </div>
    </div>
  );
};

export default Settings;

const notify = () => {
  toast.info("The event details have been updated.", {
    autoClose: false,
  });
};