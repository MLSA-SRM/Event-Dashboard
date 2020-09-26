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
            <Table style={{width: "100%"}}/>
            <Box/>
        </div>
    );
}

export default NewPeople;