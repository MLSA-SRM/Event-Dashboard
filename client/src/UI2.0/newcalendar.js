import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Tippy from "@tippyjs/react";
import NewNav from "./newnav";
import { ToastContainer, toast } from "react-toastify";

//ADD EVENT DATA HERE
const events = [
  { title: "event 1", date: "2020-09-23" },
  { title: "event2", date: "2020-09-24" },
];

export default class NewCalendar extends React.Component {

  componentDidMount(){
    message();
  }

  render() {
    return (
      <div>
        <NewNav />
        <div className="align1">
            <FullCalendar
              plugins={[dayGridPlugin]}
              eventMouseEnter={notify}
              eventMouseLeave={dismiss}
              initialview="dayGridMonth"
              events={events}
              height={500}
            />
          <ToastContainer position={"top-right"} />
        </div>
      </div>
    );
  }
}

const notify = (info) => {
  toast.info("The event you are viewing is " + info.event.title,{autoClose: "false"});
}

const dismiss = () => {
  toast.dismiss();
}

const message = () => {
  toast.info("Hover over any event to know more!", {autoClose: "5000", position: "top-center"});
}