import React from 'react';
import NewNav from './newnav';
import './addevent.css';

//event name
//event desc
//max attendance
//date
//time

const AddEvent = () => {
    return(
        <div>
            <NewNav/>
            <div className="form-body">
                <h1>Let's get your event setup</h1>
                <p>Fill in the details to get started!</p>
                <form method="POST" action="/displayevent">
                    <label>Event Name</label><br/>
                    <input type="text"></input><br/>
                    <label>Event Description</label><br/>
                    <input type="text"></input><br/>
                    <label>Maximum attendees</label><br/>
                    <input type="number"></input><br/>
                    <label>Event start date</label><br/>
                    <input type="date"></input><br/>
                    <label>Event end date</label><br/>
                    <input type="date"></input><br/>
                    <label>Event start time</label><br/>
                    <input type="time"></input><br/>
                    <label>Event end time</label><br/>
                    <input type="time"></input><br/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddEvent;