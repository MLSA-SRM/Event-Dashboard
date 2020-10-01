import React from "react";

const UpcomingEvents = ({ events, name }) => {
  return (
    <div className='events-lists'>
      <h4 style={{fontSize: "1.3em"}}>{name}</h4>
      <div className='events-row'>
        {events.map((item) => (
          <div className='events-box'>
            <h4>{item.name}</h4>
            <h6>11:00 AM</h6>
            <h6>{item.date}</h6>
            <h6>SRM University</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
