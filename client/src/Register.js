import React, { useState } from 'react';
import Axios from 'axios';
import './Auth.css';

function Register() {
	const [ registerUsername, setRegisterUsername ] = useState('');
	const [ registerPassword, setRegisterPassword ] = useState('');
	const [ flashMessage, setFlashMessage ] = useState('');
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
		})
			.then((res) => {
				if (res.data) {
					setFlashMessage('Successfully Signed In');
					setTimeout(function() {
						setFlashMessage('');
					}, 5000);
					console.log('Success Sign Up');
				} else {
					setFlashMessage('Username already taken');
					console.log('This username is already taken');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="box">
			<h4 className="message">{flashMessage}</h4>
			<h1>Sign In</h1>
			<form onSubmit={registerUser}>
				<div className="textbox">
					<input type="text" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)} />
				</div>
				<div className="textbox">
					<input
						type="password"
						placeholder="password"
						onChange={(e) => setRegisterPassword(e.target.value)}
					/>
				</div>
				<button className="btn">Register</button>
			</form>
		</div>
	);
}

export default Register;
