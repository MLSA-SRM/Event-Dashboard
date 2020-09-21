import React from 'react';
import Table from '../Table';
import NewNav from './newnav';

const NewPeople = () => {
    return(
        <div>
            <NewNav/>
            <br/>
            <br/>
            <Table style={{width: "100%"}}/>
        </div>
    );
}

export default NewPeople;