import React from 'react';
//import Plot from 'react-plotly.js';
import Nav from './components/nav';
import Body from './components/header';
import Info from './components/info';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(props) {
	const successLogin = () => toast.success('Login Successful!');

	return (
		<div onLoad={successLogin}>
			<ToastContainer autoClose={5000} position={'top-center'} />
			<Nav username={props.username} />
			<Body />
			<Info />
		</div>
	);
}

export default Home;
