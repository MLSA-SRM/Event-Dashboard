import React, { useState } from 'react';
import Axios from 'axios';

function Register() {
	const [ registerUsername, setRegisterUsername ] = useState('');
	const [ registerPassword, setRegisterPassword ] = useState('');

	const registerUser = (e) => {
		e.preventDefault();
		Axios({
			method: 'POST',
			data: {
				username: registerUsername,
				password: registerPassword
			},
			withCredentials: true,
			url: 'http://localhost:5000/register'
		}).then((res) => console.log(res));
	};

	return (
		<div>
			<form onSubmit={registerUser}>
				<input type="text" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)} />
				<input type="password" placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)} />
				<button>Register</button>
			</form>
		</div>
	);
}

export default Register;
