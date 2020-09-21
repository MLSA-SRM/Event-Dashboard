import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Table from "./Table";
import NewEvent from "./NewEvent";
import UserPage from "./User";
import Landing from "./landing";
import ProtectedRoute from "./ProtectedRoute";
import NewNav from './UI2.0/newnav';
import NewDash from './UI2.0/newdashboard';
import NewPeople from './UI2.0/newpeople';
import NewCalendar from './UI2.0/newcalendar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Context from "./Context";

function App(props) {
  const [getusername, setUsername] = useState("");
  return (
    <Context>
      <Router>
        <Switch>
          <Route exact path='/login'>
            <Login handleUsername={setUsername} />
          </Route>
          <Route exact path='/signIn'>
            <Register />
          </Route>
          <Route exact path="/newui">
            <NewNav />
          </Route>
          <Route exact path="/newdashboard">
            <NewDash/>
          </Route>
          <Route exact path="/newpeople">
            <NewPeople/>
          </Route>
          <Route exact path="/newcalendar">
            <NewCalendar/>
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
            component={UserPage}
          ></ProtectedRoute>
          <Route exact path='/user/:id'>
            <Home />
          </Route>
          <Route exact path='/table'>
            <Table />
          </Route>
        </Switch>
      </Router>
    </Context>
  );
}

export default App;
