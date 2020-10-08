import React from "react";
import Table from "../Table";
import NewNav from "./newnav";
import Box from "../textbox";
// import MailScheduler from "./MailScheduler";
const NewPeople = () => {
  return (
    <div className='margin'>
      <NewNav />
      <br />
      <br />
      <Box />
      {/* <MailScheduler /> */}
      <Table style={{ width: "100%" }} />
    </div>
  );
};

export default NewPeople;
