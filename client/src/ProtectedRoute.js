import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { State } from "./Context";
import jwtDecode from "jwt-decode";

const ProtectedRoute = ({
  component: Component,
  username,
  handleEventChange,
  ...rest
}) => {
  const { isAuth, setIsAuth } = useContext(State);
  useEffect(() => {
    let token = localStorage.getItem("auth-token");
    if (token) {
      let tokenExpiry = jwtDecode(token).exp;
      let currDate = new Date();
      if (currDate.getTime() / 1000 > tokenExpiry) {
        setIsAuth(false);
      } else {
        setIsAuth(true);
      }
    } else {
      setIsAuth(false);
    }
  }, []);
  if (isAuth === null) {
    return <></>;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === true) {
          return (
            <Component
              username={username}
              {...props}
              handleEventChange={handleEventChange}
            />
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
