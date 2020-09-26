import React from 'react';
import Table from '../Table';
import NewNav from './newnav';
import Box from '../textbox';

const NewPeople = () => {
    return(
        <div>
            <NewNav/>
            <br/>
            <br/>
            <h1 className="heading">Send Mail</h1>
            <br/>
            <Box/>
            <Table style={{width: "100%"}}/>
        </div>
    );
}

export default NewPeople;