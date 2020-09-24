import React, { createContext, useState } from "react";

export const State = createContext();

const Context = (props) => {
  const [userName, setUserName] = useState(null);
  const [dummy, setDummy] = useState(null);
  const [date, setDate] = useState(null);
  const handleChange = (data, date) => {
    setDummy(data);
    setDate(date);
  };
  const handleUserName = (data) => {
    setUserName(data);
  };
  return (
    <State.Provider
      value={{ dummy, date, userName, handleChange, handleUserName }}
    >
      {props.children}
    </State.Provider>
  );
};

export default Context;
