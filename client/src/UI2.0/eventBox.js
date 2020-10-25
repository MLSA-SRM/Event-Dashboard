import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {FaTrash} from 'react-icons/fa';
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
  return (
    <div
      className="events-box"
      onClick={() => onClickRedirect(item.name, item.rawDate)}
    >
      <h4>{item.name}<FaTrash className="deleteIcon" style={{marginLeft: "5%", top: "2px", position: "relative", zIndex: "100"}}/></h4>
      <h6>{time}</h6>
      <h6>{item.date}</h6>
      <h6>SRM University</h6>
    </div>
  );
};

export default EventBox;
