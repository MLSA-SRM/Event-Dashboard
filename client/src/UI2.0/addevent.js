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
                   <div className="form-box">
                    <input className="input-area" type="text" placeholder="Event Name"></input><br/>
                    <input className="input-area" type="text" placeholder="Event Description"></input><br/>
                    <input className="input-area" type="number" placeholder="Maximum Attendance"></input><br/>
                    <input type="date" placeholder="Event Start Date" className="input-area"></input>
                    <input type="date" className="input-area"></input><br/>
                    <input type="time" className="input-area"></input>
                    <input type="time" className="input-area"></input><br/>
                    <button>Submit</button>
                   </div>
                </form>
            </div>
        </div>
    );
}

export default AddEvent;