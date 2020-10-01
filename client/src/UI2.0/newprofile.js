import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaArrowLeft,
  FaCheck,
  FaCalendarAlt,
  FaTimes,
  FaExclamationTriangle,
  FaClock,
  FaThumbtack,
} from "react-icons/fa";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./newprofile.css";
import OngoingEvents from "./Profile Components/ongoingevents";
import UpcomingEvents from "./Profile Components/upcomingevents";

const Profile = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [eventStatus, setEventStatus] = useState("All Events");
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    axios
      .post("/user", {
        data,
        userData: data.username,
      })
      .then((res) => {
        let data = [];
        let startDate;
        let endDate;
        let value;
        res.data.events.forEach((item) => {
          startDate = new Date(item.startDate);
          endDate = new Date(item.endDate);
          if (startDate.getTime() > Date.now()) {
            value = 2;
          } else if (
            startDate.getTime() < Date.now() &&
            endDate.getTime() > Date.now()
          ) {
            value = 0; //ongoing
          } else if (
            endDate.getTime() < Date.now()
            // startDate.getTime() < Date.now()
          ) {
            value = 1; //finished
          }
          data.push({
            name: item.name,
            date: `${startDate.getDate()}/${
              startDate.getMonth() + 1
            }/${startDate.getFullYear()}`,
            rawDate: startDate,
            status: value,
          });
        });
        console.log(data);
        setData(data);
        setFilterData(data);
      });
  }, []);
  const handleOngoing = () => {
    let filtered = data.filter((item) => {
      return item.status == 0;
    });
    setFilterData(filtered);
    setEventStatus("Ongoing Events");
  };
  const handleUpcoming = () => {
    let filtered = data.filter((item) => {
      return item.status == 2;
    });
    setFilterData(filtered);
    setEventStatus("Upcoming Events");
  };
  const handleFinished = () => {
    let filtered = data.filter((item) => {
      return item.status == 1;
    });
    setFilterData(filtered);
    setEventStatus("Finished Events");
  };
  return (
    <div className='profile-body'>
      <div className='nav-div'>
        <ul className='navs-list'>
          <div className='lists-item'>
            <li>
              <FaArrowLeft className='icon1' />
              <span> Go To Dashboard</span>
            </li>
          </div>
          <div className='lists-item' onClick={handleUpcoming}>
            <li>
              <FaCalendarAlt className='icon1' />
              <span> Upcoming Events</span>
            </li>
          </div>
          <div className='lists-item' onClick={handleOngoing}>
            <li>
              <FaExclamationTriangle className='icon1' />
              <span> Ongoing Events</span>
            </li>
          </div>
          <div className='lists-item' onClick={handleFinished}>
            <li>
              <FaCheck className='icon1' />
              <span> Finished Events</span>
            </li>
          </div>
          <div className='lists-item'>
            <li>
              <FaTimes className='icon1' />
              <span> Cancelled Events</span>
            </li>
          </div>
        </ul>
      </div>
      <div className='event-div'>
        <div className='events-header'>
          <h1>My Events </h1>
        </div>
        <hr style={{ marginBottom: "2vh" }} />
        <UpcomingEvents events={filterData} name={eventStatus} />
      </div>
      <div className='profile-div'>
        <h1>My Profile</h1>
        <hr style={{ marginTop: "2.2vh", marginBottom: "2.2vh" }} />
        <h3>Hello User!</h3>
        <div className='user-data'>
          <h4>
            <FaThumbtack style={{ position: "relative", top: "3px" }} /> Pinned Event
          </h4>
          <h3 style={{ marginLeft: "0" }}>Hackathon 2020</h3>
          <h4>6:00 PM</h4>
          <h4>Thursday, 27 October</h4>
          <h4>TP Auditorium </h4>
          <button className='view-event'>Go To Event</button>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className='profile-button'>Edit Details</button>
          <button className='profile-button'>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
