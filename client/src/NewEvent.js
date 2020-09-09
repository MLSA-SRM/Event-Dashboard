import React from 'react';
import Nav from './components/nav';
import './NewEvent.css';

const NewEvent = () => {
    return(
        <div>
            <Nav/>
            <div className="body">
                <div className="title-div">
                    <div className="title-svg">
                        <div className="add-image">
                        <p className="add-image-text">Add Image +</p>
                        </div>
                    </div>
                    <h1 className="title-header">Let's get your event set up</h1>
                    <p className="title-subtext">Fill in the details to get started!</p>
                </div>
                <div className="form-div">
                    <h1 className="form-header">Event Details</h1>
                    <form>
                        <div className="input-field">
                        <h1 className="form-field-header">Event Name</h1>
                        <input type="text"></input>
                        </div>
                        <div className="input-field">
                        <h1 className="form-field-header">Event Date</h1>
                        <input type="date"></input>
                        </div>
                        <div className="input-field">
                        <h1 className="form-field-header">Event Time</h1>
                        <input type="time"></input><br/>
                        <button className="form-button" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewEvent;