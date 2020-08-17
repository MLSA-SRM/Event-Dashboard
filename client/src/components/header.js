import React from 'react';
import './header.css';

const Body = () => {
	return (
		<div className="header">
			<div>
				<h1 className="bodyheader">Welcome Lucifer</h1>
				<p className="bodysubtext">5 days to go</p>
			</div>
			<div>
				<h3 className="bodyheader">Upcoming Event</h3>
				<p className="bodysubtext">Hackathon 2020</p>
			</div>
		</div>
	);
};

export default Body;
