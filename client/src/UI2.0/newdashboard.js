import React from "react";
import LineGraph from "./linechart";
import RegPie from "./reg_pie";
import NewNav from "./newnav";
import BranchPie from "./BranchPie";
import UpcomingEvents from "./upcomingevents";
import EventInfo from "./eventinfo";
import OtherDetails from './otherdetails';
import "./newdashboard.css";
import './style.css';

const NewDash = () => {
  return (
    <div>
      <NewNav />
      <div className="new-dash-body">
        <div className="dash-row">
          <EventInfo />
          <RegPie />
          <UpcomingEvents />
        </div>
        <div className="dash-row">
          <LineGraph />
          <BranchPie />
          <OtherDetails />
        </div>
      </div>
    </div>
  );
};

export default NewDash;
