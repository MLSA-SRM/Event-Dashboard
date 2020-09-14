import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './Auth';
import './Auth.css';

function Register() {
	let history = useHistory();
	const [ registerUsername, setRegisterUsername ] = useState('');
	const [ registerPassword, setRegisterPassword ] = useState('');

	//Toastify Config

	const notifyFailure = () =>
		toast.error('This username is already taken!', {
			autoClose: 5000,
			position: 'top-center'
		});

	const registerUser = (e) => {
		e.preventDefault();
		Axios({
			method: 'POST',
			data: {
				username: registerUsername,
				password: registerPassword
			},
			withCredentials: true,
			url: '/register'
		})
			.then((res) => {
				if (res.data) {
					history.push('/');
					console.log('Success Sign Up');
				} else {
					history.push('/signIn');
					console.log('This username is already taken');
					notifyFailure();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<ToastContainer />
			<div className="authForm">
				<h1>Sign In</h1>
				<form onSubmit={registerUser}>
					<div className="textbox">
						<input
							type="text"
							placeholder="Username"
							required
							onChange={(e) => setRegisterUsername(e.target.value)}
						/>
					</div>
					<div className="textbox">
						<input
							type="password"
							placeholder="password"
							required
							onChange={(e) => setRegisterPassword(e.target.value)}
						/>
					</div>
					<button className="btn">Register</button>
					<p>
						Already have an account ? <Link to="/">Log In</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Register;
