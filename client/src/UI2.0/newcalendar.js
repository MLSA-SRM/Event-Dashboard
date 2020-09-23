import React, { useState, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import NewNav from "./newnav";
import { ToastContainer, toast } from "react-toastify";

const Newcalendar = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("/home/bargraph")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <NewNav />
      <div style={{ width: "80%", margin: "auto", marginTop: "10vh" }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          eventClick={notify}
          initialview="dayGridMonth"
          events={events}
          height={500}
        />
        <ToastContainer position={"bottom-right"} />
      </div>
    </div>
  );
};

export default Newcalendar;

const notify = (info) =>
  toast.info("The event you are viewing is " + info.event.title);
