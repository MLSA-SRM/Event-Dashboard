import React, { createContext, useState } from "react";

export const State = createContext();

const Context = (props) => {
  const [dummy, setDummy] = useState(null);
  const [date, setDate] = useState(null);
  const handleChange = (data, date) => {
    setDummy(data);
    setDate(date);
  };
  return (
    <State.Provider value={{ dummy, date, handleChange }}>
      {props.children}
    </State.Provider>
  );
};

export default Context;
