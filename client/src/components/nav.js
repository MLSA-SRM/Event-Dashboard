import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
	const [ navItems ] = useState([
		{
			title: 'Login',
			link: '/logIn'
		},
		/*{
			title: 'Sign Up',
			link: '/signIn'
		},*/
		{
			title: 'New Event',
			link: '/newevent'
		},
		{
			title: 'User',
			link: '/user'
		}
	]);

	return (
		<div>
			<div className="navbar">
				<h3 className="navlogo">Event Dashboard</h3>
				<ul>
					{navItems.map(({ link, title }) => (
						<Link className="navLink" to={link}>
							<li className="navitem">{title}</li>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Nav;
