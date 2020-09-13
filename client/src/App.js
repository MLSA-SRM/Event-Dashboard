import React from 'react';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Table from './Table';
import NewEvent from './NewEvent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/signIn">
					<Register />
				</Route>
				<ProtectedRoute exact path="/dashboard" component={Home} />
				{/* <Home />
				</ProtectedRoute> */}
				<Route exact path="/newevent">
					<NewEvent />
				</Route>
				<Route exact path="/table">
					<Table />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
