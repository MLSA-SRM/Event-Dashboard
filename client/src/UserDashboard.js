import React from "react";
import Nav from "./components/nav.js";

function UserDashboard(props) {
  const { event } = props;
  return (
    <div>
      <Nav username={props.username} />
      <div className="header">
        <div>
          <h1 className="bodyheader">Event : {event.name}</h1>
          <p className="bodysubtext">{event.date}</p>
        </div>
        <div>
          <h3 className="bodyheader">{event.status}</h3>
          <p className="bodysubtext">Event</p>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
