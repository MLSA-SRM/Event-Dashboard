import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./nav.css";
import { State } from "../Context";

function Nav(props) {
  const { userData, setUserData, setIsAuth } = useContext(State);
  let userInfo = JSON.parse(localStorage.getItem("data"));
  const username = userInfo.username;
  // const name = userData.user.username;
  let history = useHistory();

  // const [ navItems ] = useState([
  // 	{
  // 		title: 'Logout',
  // 		link: '/logOut'
  // 	},
  // 	/*{
  // 		title: 'Sign Up',
  // 		link: '/signIn'
  // 	},*/
  // 	{
  // 		title: 'New Event',
  // 		link: '/newevent'
  // 	}
  // ]);
  const onLogout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    setIsAuth(false);
    // localStorage.setItem("auth-token", "");
    localStorage.clear();
    // localStorage.setItem("auth-token", "");
    // localStorage.setItem("data", "");
  };

  return (
    <div>
      <div className='navbar'>
        <h3 className='navlogo'>Event Dashboard</h3>
        <ul>
          <Link className='navLink' to='/' onClick={onLogout}>
            <li className='navitem'>Logout</li>
          </Link>
          <Link className='navLink' to='/newevent'>
            <li className='navitem'>New Event</li>
          </Link>
          <Link className='navLink' to='/user'>
            <li className='navitem'>{username}</li>
          </Link>
          {/* {navItems.map(({ link, title }) => (
						<Link className="navLink" to={link}>
							<li className="navitem">{title}</li>
						</Link>
					))} */}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
