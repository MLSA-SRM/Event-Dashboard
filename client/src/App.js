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
import NewCalendar from "./UI2.0/newcalendar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import UserContext from "./UserContext";

// import Context from "./Context";

function App(props) {
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
        const userdataRes = await Axios.get("http://localhost:5000/authUser", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userdataRes.data.user,
        });
      }
    };

    checkForUserLoggedIn();
  }, []);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            {/* <Route
            exact
            path="/login"
            render={(routeProps) => <Login {...routeProps} />}
          />  */}
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
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/newevent" component={NewEvent}></Route>
            <ProtectedRoute
              exact
              path="/user"
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
    </>
  );
}

export default App;
