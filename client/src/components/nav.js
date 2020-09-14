import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [navItems] = useState([
    {
      id: 1,
      title: "Login",
      link: "/logIn",
    },
    /*{
			title: 'Sign Up',
			link: '/signIn'
		},*/
    {
      id: 2,
      title: "New Event",
      link: "/newevent",
    },
    {
      id: 3,
      title: "User",
      link: "/user",
    },
  ]);

  return (
    <div>
      <div className='navbar'>
        <h3 className='navlogo'>Event Dashboard</h3>
        <ul>
          {navItems.map(({ id, link, title }) => (
            <Link key={id} className='navLink' to={link}>
              <li className='navitem'>{title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
