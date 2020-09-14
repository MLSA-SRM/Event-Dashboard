import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Auth from "../Auth";
import "./nav.css";

function Nav(props) {
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
    axios({ method: "GET", withCredentials: true, url: "/logout" }).then(
      (res) => {
        if (res.data) {
          Auth.logout(() => {
            history.push("/");
          });
        }
      }
    );
  };

  return (
    <div>
      <div className='navbar'>
        <h3 className='navlogo'>Event Dashboard</h3>
        <ul>
          <Link className='navLink' to='/logOut' onClick={onLogout}>
            <li className='navitem'>Logout</li>
          </Link>
          <Link className='navLink' to='/newevent'>
            <li className='navitem'>New Event</li>
          </Link>
          <Link className='navLink' to='/user'>
            <li className='navitem'>lol</li>
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
