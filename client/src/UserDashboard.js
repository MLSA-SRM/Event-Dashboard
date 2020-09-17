import React from "react";
import { useParams } from "react-router-dom";

function UserDashboard(props) {
  let params = useParams();
  const { event } = props;
  return (
    <div className="header">
      <div>
        <h1 className="bodyheader">Event : {event.name}</h1>
        <p className="bodysubtext">{event.date}</p>
      </div>
      <div>
        <h3 className="bodyheader">{event.status}</h3>
        <p className="bodysubtext">Hackathon 2020</p>
      </div>
    </div>
  );
}

export default UserDashboard;
