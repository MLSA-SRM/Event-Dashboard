import React, { createContext, useState } from "react";
import usePersist from "./components/Persist";
export const State = createContext();

const Context = (props) => {
  const [dummy, setDummy] = useState(null);
  const [date, setDate] = useState(null);
  const [userData, setUserData] = useState({
    token: undefined,
    data: undefined,
  });
  const [isAuth, setIsAuth] = useState(null);
  const [dataParams, setDataParams] = useState(null);
  const handleChange = (data, date) => {
    setDummy(data);
    setDate(date);
  };
  const [data, setData] = usePersist(null, "data");
  return (
    <State.Provider
      value={{
        dummy,
        date,
        userData,
        data,
        setData,
        handleChange,
        setUserData,
        isAuth,
        setIsAuth,
        dataParams,
        setDataParams,
      }}
    >
      {props.children}
    </State.Provider>
  );
};

export default Context;
