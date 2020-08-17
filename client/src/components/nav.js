import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

const Nav = () => {
	return (
		<div>
			<div className="navbar">
				<h3 className="navlogo">Event Dashboard</h3>
				<ul>
					<li className="navitem">
						<Link className="navLink">Dashboard</Link>
					</li>
					<li className="navitem">
						<Link className="navLink" to="/logIn">
							Login
						</Link>
					</li>
					<li className="navitem">
						<Link className="navLink" to="/signIn">
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
