import React, { useEffect, useState } from "react";
import AddEvent from "./addevent";
import axios from "axios";
import NewNav from "./newnav";

const Settings = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState({});
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
          startDate: new Date(res.data.startDate),
          endDate: new Date(res.data.endDate),
        });
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
        startDate,
        endDate,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
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
                className='input'
                placeholder={data.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Maximum Attendance</h5>
              <input
                className='input'
                placeholder={data.attendence}
                value={num}
                onChange={(e) => setNum(e.target.value)}
                type='number'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Event Start Date</h5>
              <input
                className='input'
                // placeholder={data.startDate}
                onChange={(e) => setStartDate(e.target.value)}
                type='datetime-local'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Event End Date</h5>
              <input
                className='input'
                // placeholder={data.endDate}
                onChange={(e) => setEndDate(e.target.value)}
                type='datetime-local'
              ></input>
            </div>
            <button className='button'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
