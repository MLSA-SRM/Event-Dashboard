import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./landing";
import Stuff from "./Stuff";
import Contact from "./Contact";
import login from "./Login";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <ul className="headera">
            <li><h1>Microsoft</h1></li>
            <div className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/login">Log In</NavLink></li>
            
            </div>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={login}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;