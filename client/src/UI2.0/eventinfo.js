import React from 'react';

const EventInfo = () => {
    return(
        <div
            className='dash-col1'
            style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "left",
            }}
          >
            <h1 className='dash-header' style={{ textAlign: "left" }}>
              EVENT INFO
            </h1>
            <h1 className='event-main-name' style={{ textAlign: "left" }}>
              Hackathon
            </h1>
            <h1
              className='event-main-name'
              style={{
                fontSize: "5vh",
                textAlign: "left",
                color: "black",
                opacity: "0.5",
                fontWeight: "600",
              }}
            >
              7th October, 2020
            </h1>
            <h1
              className='event-main-name'
              style={{
                fontSize: "5vh",
                textAlign: "left",
                color: "black",
                opacity: "0.5",
                fontWeight: "600",
              }}
            >
              11:00 AM
            </h1>
            <br />
            <p
              style={{
                fontSize: "3vh",
                textAlign: "left",
                color: "black",
                opacity: "0.5",
              }}
            >
              5 Days To Go!
            </p>
            <br />
            <button
              style={{ margin: "0", marginBottom: "3vh", width: "30%" }}
              className='edit'
            >
              Edit Details
            </button>
          </div>
    );
}

export default EventInfo;