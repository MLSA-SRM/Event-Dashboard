import React, { useState, useEffect } from "react";
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
import NewCalendar from "./UI2.0/newcalendar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import UserContext from "./UserContext";
import Context from "./Context";

function App(props) {
  const [getusername, setUsername] = useState("");
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkForUserLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await Axios.post(
        "http://localhost:5000/validToken",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userdata = await Axios.get("http://localhost:5000/authUser", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userdata.data,
        });
      }
    };

    checkForUserLoggedIn();
  }, []);

  return (
    // <Context>
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login handleUsername={setUsername} />
          </Route>
          <Route exact path="/signIn">
            <Register />
          </Route>
          {/* <Route exact path='/newui'>
            <NewNav />
          </Route> */}
          {/* <Route exact path='/newdashboard'>
            <NewDash />
          </Route> */}
          <Route exact path="/newpeople">
            <NewPeople />
          </Route>
          <Route exact path="/newcalendar">
            <NewCalendar />
          </Route>
          <ProtectedRoute
            username={getusername}
            exact
            path="/dashboard"
            component={Home}
          />
          <ProtectedRoute
            exact
            username={getusername}
            path="/newevent"
            component={NewEvent}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/user"
            username={getusername}
            component={UserPage}
          ></ProtectedRoute>
          <ProtectedRoute exact path="/user/:id">
            {/* <Home /> */}
            <NewDash />
          </ProtectedRoute>
          <Route exact path="/table">
            <Table />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
    // </Context>
  );
}

export default App;
