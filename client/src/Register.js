import React, { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

import "./Auth.css";

function Register() {
  let history = useHistory();
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const registerUser = (e) => {
    e.preventDefault();
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/register",
    })
      .then((res) => {
        if (res.data) {
          history.push("/logIn");
          console.log("Success Sign Up");
        } else {
          history.push("/signIn");
          console.log("This username is already taken");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='authForm'>
      <h1>Sign In</h1>
      <form onSubmit={registerUser}>
        <div className='textbox'>
          <input
            type='text'
            placeholder='Username'
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </div>
        <div className='textbox'>
          <input
            type='password'
            placeholder='password'
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <button className='btn'>Register</button>
        <p>
          Already have an account ? <Link to='/logIn'>Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
