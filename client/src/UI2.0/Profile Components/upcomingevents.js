import React from "react";
import EventBox from "../eventBox";
const UpcomingEvents = ({ events, name }) => {
  return (
    <div className="events-lists">
      <h4 style={{ fontSize: "1.3em" }}>{name}</h4>
      <div className="events-row">
        {events.map((item) => (
          <EventBox name={item.name} date={item.date} rawDate={item.rawDate} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
