import React from "react";
import Nav from "./components/nav.js";
import Info from "./components/info.js";
import Table from "./Table.js";

function UserDashboard(props) {
  console.log(props);
  const { event } = props;
  return (
    <div>
      <Nav username={props.username} />
      <div className='header'>
        <div>
          <h1 className='bodyheader'>Event : {event.name}</h1>
          <p className='bodysubtext'>{event.date}</p>
        </div>
        <div>
          <h3 className='bodyheader'>{event.status}</h3>
          <p className='bodysubtext'>Event</p>
        </div>
      </div>
      <Info name={event.name} />
      <Table />
    </div>
  );
}

export default UserDashboard;
