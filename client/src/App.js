import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Table from "./Table";
import NewEvent from "./NewEvent";
import UserPage from "./User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

function App() {
  const [getusername, setUsername] = useState("");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login handleUsername={setUsername} />
        </Route>
        <Route exact path="/signIn">
          <Register />
        </Route>
        <ProtectedRoute
          username={getusername}
          exact
          path="/dashboard"
          component={Home}
        />
        <Route exact path="/newevent">
          <NewEvent />
        </Route>
        <Route exact path="/user">
          <UserPage />
        </Route>
        <Route exact path="/table">
          <Table />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
