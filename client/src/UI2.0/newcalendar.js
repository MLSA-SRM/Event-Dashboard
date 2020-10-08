import React, { useState, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import NewNav from "./newnav";
import { ToastContainer, toast } from "react-toastify";

const Newcalendar = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    message();
    let data = JSON.parse(localStorage.getItem("data"));
    axios
      .post("/home/bargraph", {
        id: data.id,
      })
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{padding: "4vh"}}>
      <NewNav />
      <div style={{ width: "85%", margin: "auto", marginTop: "10vh" }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          eventMouseEnter={notify}
          eventMouseLeave={dismiss}
          initialview='dayGridMonth'
          events={events}
          height={500}
        />
        <ToastContainer position={"bottom-right"} />
      </div>
    </div>
  );
};

export default Newcalendar;

const notify = (info) => {
  toast.info("The event you are viewing is " + info.event.title, {
    autoClose: false,
  });
};

const dismiss = () => {
  toast.dismiss();
};

const message = () => {
  toast.info("Hover over any event to know more!", {
    autoClose: "5000",
    position: "top-center",
  });
};
