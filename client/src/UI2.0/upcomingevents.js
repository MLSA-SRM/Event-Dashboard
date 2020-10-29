import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import CALENDAR from './CALENDAR.svg';
import "tippy.js/themes/light.css";

const UpcomingEvents = () => {
  return (
    <Tippy
      theme="light"
      animation="scale"
      content="This tab shows the upcoming events"
    >
      <div className="dash-col2">
        <h1 className="dash-header" style={{ textAlign: "left" }}>
          CALENDAR
        </h1>
        <img style={{marginTop: "3vh"}} src={CALENDAR} height="250px" width="200px"></img>
        <h1 className="dash-header"><a style={{textDecoration: "none", color: "#3454ee"}} href="/newcalendar">Visit Event Calendar</a></h1>
      </div>
    </Tippy>
  );
};

export default UpcomingEvents;
