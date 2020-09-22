import React from "react";
import "./newnav.css";
import { Link, NavLink } from "react-router-dom";

const NewNav = () => {
  return (
    <div className='newBody'>
      <div className='main-nav'>
        <ul className='main-nav-list'>
          <NavLink to='/newdashboard' activeClassName='current'>
            <li className='main-nav-item'>Dashboard</li>
          </NavLink>
          <NavLink to='/newpeople' activeClassName='current'>
            <li className='main-nav-item'>People</li>
          </NavLink>
          <NavLink to='/user' activeClassName='current'>
            <li className='main-nav-item'>Events</li>
          </NavLink>
          <NavLink to='/newcalendar' activeClassName='current'>
            <li className='main-nav-item'>Calendar</li>
          </NavLink>
        </ul>
      </div>
      <div className='user-tab'>
        <div className='user-dp'>
          <img
            className='user-dp'
            src='https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg'
          ></img>
        </div>
        <Link to='/user' style={{ textDecoration: "none" }}>
          <h1 className='username'>Jugal</h1>
        </Link>
      </div>
    </div>
  );
};

export default NewNav;
