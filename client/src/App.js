import React, { useState, useContext } from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Table from "./Table";
import NewEvent from "./NewEvent";
import UserPage from "./User";
import Landing from "./landing";
import ProtectedRoute from "./ProtectedRoute";
import NewDash from "./UI2.0/newdashboard";
import NewPeople from "./UI2.0/newpeople";
import AddEvent from './UI2.0/addevent';
import NewCalendar from "./UI2.0/newcalendar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { State } from "./Context";

function App(props) {
  // const [getusername, setUsername] = useState("");
  const { userName } = useContext(State);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signIn'>
          <Register />
        </Route>
        {/* <Route exact path='/newui'>
            <NewNav />
          </Route> */}
        {/* <Route exact path='/newdashboard'>
            <NewDash />
          </Route> */}
        <Route exact path='/newpeople'>
          <NewPeople />
        </Route>
        <Route exact path='/newcalendar'>
          <NewCalendar />
        </Route>
        <Route exact path='/addevent'>
          <AddEvent />
        </Route>
        <ProtectedRoute
          username={userName}
          exact
          path='/dashboard'
          component={Home}
        />
        <ProtectedRoute
          exact
          username={userName}
          path='/newevent'
          component={NewEvent}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path='/user'
          username={userName}
          component={UserPage}
        ></ProtectedRoute>
        <ProtectedRoute exact path='/user/:id'>
          {/* <Home /> */}
          <NewDash />
        </ProtectedRoute>
        <Route exact path='/table'>
          <Table />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
