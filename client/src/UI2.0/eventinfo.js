import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";
import React from "react";

const EventInfo = ({ name, date }) => {
  let data = new Date(date);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[data.getMonth()];
  return (
    <Tippy
      theme='light'
      animation='scale'
      content='This tab shows the basic event details'
    >
      <div
        className='dash-col1'
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "left",
        }}
      >
        <h1 className='dash-header' style={{ textAlign: "left" }}>
          EVENT INFO
        </h1>
        <h1 className='event-main-name' style={{ textAlign: "left" }}>
          {name}
        </h1>
        <h1
          className='event-main-name'
          style={{
            fontSize: "5vh",
            textAlign: "left",
            color: "black",
            opacity: "0.5",
            fontWeight: "600",
          }}
        >
          {data.getDate() + "th " + month + ", " + data.getFullYear()}
        </h1>
        <h1
          className='event-main-name'
          style={{
            fontSize: "5vh",
            textAlign: "left",
            color: "black",
            opacity: "0.5",
            fontWeight: "600",
          }}
        >
          11:00 AM
        </h1>
        <br />
        <p
          style={{
            fontSize: "3vh",
            textAlign: "left",
            color: "black",
            opacity: "0.5",
          }}
        >
          5 Days To Go!
        </p>
        <br />
        <button
          style={{ margin: "0", marginBottom: "3vh", width: "30%" }}
          className='edit'
        >
          Edit Details
        </button>
      </div>
    </Tippy>
  );
};

export default EventInfo;
