import React from "react";
import EventBox from "../eventBox";
import NULLEVENTS from "./NULLEVENTS.svg";

const UpcomingEvents = ({ events, name }) => {
  console.log(events);
  return (
    <div className="events-lists">
      <h4 style={{ fontSize: "1.3em" }}>{name}</h4>
      {events.length === 0 && (
        <div>
          <div>
            <h3
              style={{
                textAlign: "center",
                marginTop: "4vh",
                color: "#999999",
                marginBottom: "3vh",
                fontWeight: "500",
              }}
            >
              Nothing to see here! Add a{" "}
              <a className="NewEvent" href="/addevent">
                New Event
              </a>
            </h3>
          </div>
          <div>
            <img
              style={{ margin: "auto", marginLeft: "29%", marginRight: "20%" }}
              src={NULLEVENTS}
              height="340"
              width="360"
            ></img>
          </div>
        </div>
      )}
      <div className="events-row">
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
