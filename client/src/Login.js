import React, { useState } from 'react';
import axios from 'axios';

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
		}).then((res) => console.log(res));
	};

	return (
		<div>
			<form onSubmit={loginUser}>
				<input type="text" placeholder="Username" onChange={(e) => setLoginUsername(e.target.value)} />
				<input type="password" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
				<button>Login</button>
			</form>
		</div>
	);
}

export default Login;
