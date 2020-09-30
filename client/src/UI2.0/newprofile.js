import React from "react";
import {
  FaArrowLeft,
  FaCheck,
  FaCalendarAlt,
  FaTimes,
  FaExclamationTriangle,
  FaClock,
  FaThumbtack,
} from "react-icons/fa";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import "./newprofile.css";
import OngoingEvents from "./Profile Components/ongoingevents";
import UpcomingEvents from "./Profile Components/upcomingevents";

const Profile = () => {
  return (
    <div className="profile-body">
      <div className="nav-div">
        <ul className="navs-list">
          <NavLink to="/user/newcalendar" activeClassName="selected">
            <div className="lists-item">
              <li>
                <FaArrowLeft className="icon1" />
                <span> Go To Dashboard</span>
              </li>
            </div>
          </NavLink>
          <NavLink to="/upcoming" activeClassName="selected">
            <div className="lists-item">
              <li>
                <FaCalendarAlt className="icon1" />
                <span> Upcoming Events</span>
              </li>
            </div>
          </NavLink>
          <NavLink to="/abc/ongoing" activeClassName="selected">
            <div className="lists-item">
              <li>
                <FaExclamationTriangle className="icon1" />
                <span> Ongoing Events</span>
              </li>
            </div>
          </NavLink>
          <NavLink to="/abc/finished" activeClassName="selected">
            <div className="lists-item">
              <li>
                <FaCheck className="icon1" />
                <span> Finished Events</span>
              </li>
            </div>
          </NavLink>
          <NavLink to="/abc/cancelled" activeClassName="selected">
            <div className="lists-item">
              <li>
                <FaTimes className="icon1" />
                <span> Cancelled Events</span>
              </li>
            </div>
          </NavLink>
        </ul>
      </div>
      <div className="event-div">
        <div className="events-header">
          <h1>My Events </h1>
        </div>
        <hr style={{ marginBottom: "2vh" }} />
        <Router>
          <Switch>
            <Route exact path="abc/upcoming">
              <UpcomingEvents />
            </Route>
            <Route exact path="abc/ongoing">
              <OngoingEvents />
            </Route>
            <Route exact path="abc/finished">
              <UpcomingEvents />
            </Route>
            <Route exact path="abc/cancelled">
              <UpcomingEvents />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="profile-div">
        <h1>My Profile</h1>
        <hr style={{ marginTop: "2.2vh", marginBottom: "2.2vh" }} />
        <h3>Hello User!</h3>
        <div className="user-data">
          <h4>
            <FaThumbtack style={{ position: "relative", top: "3px" }} /> PINNED
            EVENT
          </h4>
          <h3 style={{ marginLeft: "0" }}>Hackathon 2020</h3>
          <h4>6:00 PM</h4>
          <h4>Thursday, 27 October</h4>
          <h4>TP Auditorium </h4>
          <button className="view-event">Go To Event</button>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="profile-button">Edit Details</button>
          <button className="profile-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
