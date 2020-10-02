import React, { useContext, useEffect } from "react";
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
import AddEvent from "./UI2.0/addevent";
import NewCalendar from "./UI2.0/newcalendar";
import PageNotFound from "./PageNotFound";
import Profile from "./UI2.0/newprofile";
import Settings from './UI2.0/settings';
// import usePersist from "./components/Persist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Axios from "axios";
import { State } from "./Context";

// import Context from "./Context";

function App(props) {
  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined,
  // });
  const { setUserData, setData } = useContext(State);
  let history = useHistory();
  useEffect(() => {
    const checkForUserLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await Axios.post("/validToken", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenResponse.data) {
        const userdataRes = await Axios.get("/authUser", {
          headers: { "x-auth-token": token },
        });
        // console.log(userdataRes.data);
        setUserData({
          token,
          user: userdataRes.data,
        });
        setData(userdataRes.data);
        // history.push("/user");
      }
    };
    checkForUserLoggedIn();
  }, []);

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
        <ProtectedRoute exact path='/newpeople'>
          <NewPeople />
        </ProtectedRoute>
        <ProtectedRoute exact path='/abc'>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute exact path='/newcalendar'>
          <NewCalendar />
        </ProtectedRoute>
        <Route exact path='/settings'>
          <Settings />
        </Route>
        <Route exact path='/dashboard' component={Home} />
        <ProtectedRoute
          exact
          path='/addevent'
          component={AddEvent}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path='/user'
          component={UserPage}
        ></ProtectedRoute>
        <ProtectedRoute exact path='/user/:id'>
          {/* <Home /> */}
          <NewDash />
        </ProtectedRoute>
        <ProtectedRoute exact path='/table'>
          <Table />
        </ProtectedRoute>
        {/* Invalid Route Page Not Found 
        Don't add routes after this */}
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
