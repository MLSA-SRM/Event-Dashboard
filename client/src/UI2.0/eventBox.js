import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Axios from "axios";

const EventBox = (item) => {
  let history = useHistory();
  const [time, setTime] = useState("");
  useEffect(() => {
    let data = new Date(item.rawDate);
    let hours = data.getHours() > 12 ? data.getHours() - 12 : data.getHours();
    let stamp = data.getHours() > 12 ? "pm" : "am";
    setTime(`${hours}:${data.getMinutes()} ${stamp}`);
  }, []);
  const onClickRedirect = (data, date) => {
    history.push("/user/" + data);
    // handleChange(data, date);
    let value = { data, date };
    localStorage.setItem("eventName", data);
    localStorage.setItem("test", JSON.stringify(value));
  };

  const onClickDelete = () => {
    window.location.reload(false);
    let user = JSON.parse(localStorage.getItem("data"));
    Axios.post("/removeevent", {
      name: item.name,
      user: user.id,
    })
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div
      className='events-box'
      onClick={() => onClickRedirect(item.name, item.rawDate)}
    >
      <h4>
        {item.name}
        <a
          onClick={(e) => {
            e.stopPropagation();
            onClickDelete(item.name);
          }}
        >
          <FaTrash
            className='deleteIcon'
            style={{
              marginLeft: "5%",
              top: "2px",
              position: "relative",
              zIndex: "102",
            }}
          />
        </a>
      </h4>
      <h6>{time}</h6>
      <h6>{item.date}</h6>
      <h6>{item.venue}</h6>
    </div>
  );
};

export default EventBox;
