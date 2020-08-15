import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Login from './Login';

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul className="buttons">
						<li>
							<Link className="button" to="/signIn">
								Sign In
							</Link>
						</li>
						<li>
							<Link className="button" to="/logIn">
								Log In
							</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/signIn">
						<Register />
					</Route>
					<Route path="/logIn">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
