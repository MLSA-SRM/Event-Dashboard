import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";
import { State } from "./Context";

function Login(props) {
  let history = useHistory();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { userData, setUserData, setIsAuth } = useContext(State);

  const loginUser = async (e) => {
    e.preventDefault();
    const loginRes = await axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/login",
    });
    // console.log(loginRes);
    const token = loginRes.data.token;
    const toastMessage = loginRes.data.msg;
    //toastify config
    const notifySuccess = () =>
      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    const notifyFailure = () =>
      toast.error(`${toastMessage}`, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    if (loginRes.data.status) {
      setUserData({
        token,
        user: loginRes.data.user,
      });
      setIsAuth(true);
      localStorage.setItem("auth-token", token);
      localStorage.setItem("data", JSON.stringify(loginRes.data.user));
      history.push("/user");
      notifySuccess();
    } else {
      history.push("/login");
      notifyFailure();
    }

    // history.push("/");

    // .then((res) => {
    //   if (res.data.status) {
    //     // console.log(res.data.userInfo.username);
    //     props.handleUsername(res.data.userInfo.username);
    //     Auth.authenticate((res) => {
    //       console.log(res);
    //       history.push("/user");
    //       notifySuccess();
    //     });
    //   } else {
    //     history.push("/login");
    //     notifyFailure();
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="authForm">
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <div className="textbox">
            <input
              id="loginUsername"
              required
              type="text"
              placeholder="Username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              id="loginPassword"
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button className="btn">Login</button>
          <p>
            Create a new account ? <Link to="/signIn">Sign In</Link>
          </p>
          <p>
            Want to go back ? <Link to="/">Home</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
