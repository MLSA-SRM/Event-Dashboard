import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
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
          UPCOMING EVENTS
        </h1>
        <div className="event-list-div">
          <div className="event-box" style={{ flexShrink: "0" }}>
            <p className="event-head">Event Name</p>
            <p className="event-subtext">1st October</p>
          </div>
          <div className="event-box">
            <p className="event-head">Event Name</p>
            <p className="event-subtext">1st October</p>
          </div>
          <div className="event-box">
            <p className="event-head">Event Name</p>
            <p className="event-subtext">1st October</p>
          </div>
          <div className="event-box">
            <p className="event-head">Event Name</p>
            <p className="event-subtext">1st October</p>
          </div>
          <div className="event-box">
            <p className="event-head">Event Name</p>
            <p className="event-subtext">1st October</p>
          </div>
          <div className="event-box">
            <p className="event-head">Event Name</p>
            <p className="event-subtext">1st October</p>
          </div>
          <div className="event-box">
            <p className="event-head">Event Name</p>
            <p className="event-subtext">1st October</p>
          </div>
          <div className="event-box" style={{ flexShrink: "0" }}>
            <p className="event-head">Event Name</p>
            <p className="event-subtext">1st October</p>
          </div>
        </div>
      </div>
    </Tippy>
  );
};

export default UpcomingEvents;
