import React from 'react';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/signIn">
					<Register />
				</Route>
				<Route exact path="/logIn">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
