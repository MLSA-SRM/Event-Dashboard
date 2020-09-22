import React from 'react';

const UpcomingEvents = () => {
    return(
        <div className='dash-col2'>
            <h1 className='dash-header' style={{ textAlign: "left" }}>
              UPCOMING EVENTS
            </h1>
            <div className='event-list-div'>
              <div className='event-box' style={{ flexShrink: "0" }}>
                <p className='event-head'>Event Name</p>
                <p className='event-subtext'>1st October</p>
              </div>
              <div className='event-box'>
                <p className='event-head'>Event Name</p>
                <p className='event-subtext'>1st October</p>
              </div>
              <div className='event-box'>
                <p className='event-head'>Event Name</p>
                <p className='event-subtext'>1st October</p>
              </div>
              <div className='event-box'>
                <p className='event-head'>Event Name</p>
                <p className='event-subtext'>1st October</p>
              </div>
              <div className='event-box'>
                <p className='event-head'>Event Name</p>
                <p className='event-subtext'>1st October</p>
              </div>
              <div className='event-box'>
                <p className='event-head'>Event Name</p>
                <p className='event-subtext'>1st October</p>
              </div>
              <div className='event-box'>
                <p className='event-head'>Event Name</p>
                <p className='event-subtext'>1st October</p>
              </div>
              <div className='event-box' style={{ flexShrink: "0" }}>
                <p className='event-head'>Event Name</p>
                <p className='event-subtext'>1st October</p>
              </div>
            </div>
          </div>
    );
}

export default UpcomingEvents;