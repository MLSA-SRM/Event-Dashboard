import React, { createContext, useState } from "react";

export const State = createContext();

const Context = (props) => {
  const [dummy, setDummy] = useState(null);
  const [date, setDate] = useState(null);
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [isAuth, setIsAuth] = useState(null);
  const handleChange = (data, date) => {
    setDummy(data);
    setDate(date);
  };
  return (
    <State.Provider
      value={{
        dummy,
        date,
        userData,
        handleChange,
        setUserData,
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </State.Provider>
  );
};

export default Context;
