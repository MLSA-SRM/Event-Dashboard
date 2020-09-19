import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Table from "./Table";
import NewEvent from "./NewEvent";
import UserPage from "./User";

import UserDashboard from "./UserDashboard";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
import landing from "./landing";
import login from "./Login";
import signin from "./Register";

function App(props) {
  const [getusername, setUsername] = useState("");
  const [events, setEvents] = useState([]);

  const findEvent = (id) => {
    return events.find((event) => {
      return id === event.id;
    });
  };

  return (
    <Router>
      <div>
        <div className='content'>
          <Route exact path='/' component={landing} />
          <Route path='/login' component={login} />
          <Route path='/signin' component={signin} />
        </div>
      </div>
      <Switch>
        <Route exact path='/login'>
          <Login handleUsername={setUsername} />
        </Route>
        <Route exact path='/signIn'>
          <Register />
        </Route>
        <ProtectedRoute
          username={getusername}
          exact
          path='/dashboard'
          component={Home}
        />
        <ProtectedRoute
          exact
          username={getusername}
          path='/newevent'
          component={NewEvent}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path='/user'
          username={getusername}
          handleEventChange={setEvents}
          component={UserPage}
        ></ProtectedRoute>
        <Route
          exact
          path='/user/:id'
          render={(props) => {
            // return findEvent(props.match.params.id) !== null ? (
            return (
              <UserDashboard
                username={getusername}
                event={findEvent(props.match.params.id)}
              />
            );
            // ) : (
            // <UserPage />
            // );
          }}
        />
        <Route exact path='/table'>
          <Table />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
