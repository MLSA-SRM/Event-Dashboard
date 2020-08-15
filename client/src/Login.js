import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

function Login() {
	const [ loginUsername, setLoginUsername ] = useState('');
	const [ loginPassword, setLoginPassword ] = useState('');

	const loginUser = (e) => {
		e.preventDefault();
		axios({
			method: 'POST',
			data: {
				username: loginUsername,
				password: loginPassword
			},
			withCredentials: true,
			url: 'http://localhost:5000/login'
		}).then((res) => console.log(res.data));
	};

	return (
		<div className="box">
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<div className="textbox">
					<input type="text" placeholder="Username" onChange={(e) => setLoginUsername(e.target.value)} />
				</div>
				<div className="textbox">
					<input type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
				</div>
				<button className="btn">Login</button>
			</form>
		</div>
	);
}

export default Login;
