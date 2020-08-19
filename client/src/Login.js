import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

function Login() {
  let history = useHistory();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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
    toast.error("Incorrect credentials!", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const loginUser = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/login",
    })
      .then((res) => {
        if (res.data) {
          history.push("/");
          notifySuccess();
        } else {
          history.push("/logIn");
          notifyFailure();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
              type="text"
              placeholder="Username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button className="btn">Login</button>
          <p>
            Create a new account ? <Link to="/signIn">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;