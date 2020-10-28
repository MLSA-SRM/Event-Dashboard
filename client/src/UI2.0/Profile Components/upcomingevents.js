import React from "react";
import EventBox from "../eventBox";
import { FaTrash } from "react-icons/fa";
const UpcomingEvents = ({ events, name }) => {
  console.log(events);
  return (
    <div className='events-lists'>
      <h4 style={{ fontSize: "1.3em" }}>{name}</h4>
      {/* { events.length === 0 && 
        jugal Write code here
      } */}
      <div className='events-row'>
        {events.map((item) => (
          <EventBox
            name={item.name}
            date={item.date}
            venue={item.venue}
            rawDate={item.rawDate}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
