import React from "react";
import {
  FaArrowLeft,
  FaCheck,
  FaCalendarAlt,
  FaTimes,
  FaExclamationTriangle, FaClock, FaThumbtack
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./newprofile.css";

const Profile = () => {
  return (
    <div className="profile-body">
      <div className="nav-div">
        <ul className="navs-list">
          <div className="lists-item">
            <li>
              <FaArrowLeft className="icon1" /><span>  Go To Dashboard</span> 
            </li>
          </div>
          <div className="lists-item">
            <li>
              <FaCalendarAlt className="icon1"/><span>  Upcoming Events</span>
            </li>
          </div>
          <div className="lists-item">
            <li>
              <FaExclamationTriangle className="icon1"/><span>  Ongoing Events</span>
            </li>
          </div>
          <div className="lists-item">
            <li>
              <FaCheck className="icon1"/><span>  Finished Events</span>
            </li>
          </div>
          <div className="lists-item">
            <li>
              <FaTimes className="icon1"/><span>  Cancelled Events</span>
            </li>
          </div>
        </ul>
      </div>
      <div className="event-div">
        <div className="events-header">
          <h1>My Events </h1>
        </div>
          <hr style={{marginBottom: "2vh"}}/>
        <div className="events-lists">
          <h4>UPCOMING EVENTS</h4>
          <div className="events-row">
            <div className="events-box">
              <h4>Event Name</h4>
              <h6>11:00 AM</h6>
              <h6>Thursday</h6>
              <h6>SRM University</h6>
            </div>
            <div className="events-box">
              <h4>Event Name</h4>
              <h6>11:00 AM</h6>
              <h6>Thursday</h6>
              <h6>SRM University</h6>
            </div>
          </div>
          <div className="events-row">
            <div className="events-box">
              <h4>Event Name</h4>
              <h6>11:00 AM</h6>
              <h6>Thursday</h6>
              <h6>SRM University</h6>
            </div>
            <div className="events-box">
              <h4>Event Name</h4>
              <h6>11:00 AM</h6>
              <h6>Thursday</h6>
              <h6>SRM University</h6>
            </div>
          </div>
          <div className="events-row">
            <div className="events-box">
              <h4>Event Name</h4>
              <h6>11:00 AM</h6>
              <h6>Thursday</h6>
              <h6>SRM University</h6>
            </div>
            <div className="events-box">
              <h4>Event Name</h4>
              <h6>11:00 AM</h6>
              <h6>Thursday</h6>
              <h6>SRM University</h6>
            </div>
          </div>
          <div className="events-row">
            <div className="events-box">
              <h4>Event Name</h4>
              <h6>11:00 AM</h6>
              <h6>Thursday</h6>
              <h6>SRM University</h6>
            </div>
            <div className="events-box">
              <h4>Event Name</h4>
              <h6>11:00 AM</h6>
              <h6>Thursday</h6>
              <h6>SRM University</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-div">
        <h1>My Profile</h1>
        <hr style={{marginTop: "2.2vh", marginBottom: "2.2vh"}}/>
        <h3>Hello User!</h3>
        <div className="user-data">
          <h4><FaThumbtack style={{position: "relative", top: "3px"}}/>  PINNED EVENT</h4>
          <h3 style={{marginLeft: "0"}}>Hackathon 2020</h3>
          <h4>6:00 PM</h4>
          <h4>Thursday, 27 October</h4>
          <h4>TP Auditorium </h4>
          <button className="view-event">Go To Event</button>
        </div>
        <div style={{textAlign: "center"}}>
        <button className="profile-button">Edit Details</button>
        <button className="profile-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
