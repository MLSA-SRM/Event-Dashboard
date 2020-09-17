import React from "react";
//import Plot from 'react-plotly.js';
import Nav from "./components/nav";
import Body from "./components/header";
import Info from "./components/info";
import Table from './Table';
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home(props) {
  const successLogin = () => toast.success("Login Successful!");
  const { username } = props;
  return (
    <div onLoad={successLogin}>
      <ToastContainer autoClose={5000} position={"top-center"} />
      <Nav username={username} />
      <Body />
      <Info />
      <Table />
    </div>
  );
}

export default Home;
