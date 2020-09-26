import React from 'react';
import NewNav from './newnav';
import './addevent.css';
import ScriptTag from 'react-script-tag';

//event name
//event desc
//max attendance
//date
//time

const AddEvent = () => {
    return(
        <div>
            <NewNav/>
            <ScriptTag  type="text/javascript" src="script.js"/>
            <div className="form-body">
                <h1>Let's get your event setup</h1>
                <p>Fill in the details to get started!</p>
                <div className="form-container">
                    <form action="">
                      
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddEvent;