import React, { useContext } from "react";
import Nav from "./components/nav";
import Body from "./components/header";
import Info from "./components/info";
import Table from "./Table";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { State } from "./Context";
function Home(props) {
  // const { dummy, date } = useContext(State);
  // console.log(dummy);
  const successLogin = () => toast.success("Login Successful!");
  const { username } = props;
  return (
    <div onLoad={successLogin}>
      <ToastContainer autoClose={5000} position={"top-center"} />
      <Nav username={username} />
      <Body
      // name={dummy} date={date}
      />
      <Info
      // name={dummy}
      />
      <Table />
    </div>
  );
}

export default Home;
