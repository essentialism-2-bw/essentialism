import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, otherProps }) {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...otherProps}
      render={props => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default PrivateRoute;
