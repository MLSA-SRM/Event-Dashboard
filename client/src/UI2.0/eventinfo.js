import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EventInfo = ({ name, date }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let data = new Date(date);
    console.log(data);
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
    let hours = data.getHours() > 12 ? data.getHours() - 12 : data.getHours();
    let stamp = data.getHours() > 12 ? "pm" : "am";
    setData({
      date: data.getDate(),
      month: months[data.getMonth()],
      year: data.getFullYear(),
      time: `${hours}:${data.getMinutes()} ${stamp}`,
    });
  }, []);
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
          {data.date + "th " + data.month + ", " + data.year}
          {/* {new data.getDate() + "th " + ", " + new data.getFullYear()} */}
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
          {data.time}
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
          {/* 5 Days To Go! */}
        </p>
        <br />
        <Link
          to='/settings'
          style={{
            margin: "0",
            marginBottom: "3vh",
            width: "30%",
            background: "#3454ee",
            border: "none",
            fontSize: "2.25vh",
            padding: ".75vh",
            outline: "none",
            color: "white",
            fontFamily: "Poppins",
            fontWeight: "500",
            borderRadius: "35px",
          }}
          className='edit'
        >
          Edit Details
        </Link>
      </div>
    </Tippy>
  );
};

export default EventInfo;
