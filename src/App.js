import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Auth from "./components/Auth";
import InitialValues from "./components/InitialValues";
import TopValues from "./components/TopValues";
import Descriptions from "./components/Descriptions";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./Utils/PrivateRoute";
import "./App.css";

function App() {
  const [values, setValues] = useState([]);

  function handleValueChange(list, hasFunc, func, token) {
    console.log("submited values", list);
    setValues([...list]);
    if (hasFunc) {
      console.log("function goes here", list, func);
      func(list, token);
    }
  }

  const placeholderList = [
    {
      value: "Love",
      color: "light",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      value: "Peace",
      color: "secondary",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      value: "Harmony",
      color: "dark",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  const appBackgroundStyle = {
    // background: `linear-gradient(
    //   135deg,
    //   rgba(47, 128, 237, 1) 0%,
    //   rgb(7, 74, 168) 98%
    // )`,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px"
  };

  return (
    <div style={appBackgroundStyle}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/onboarding/descriptions">
            <Descriptions
              valueList={values}
              handleValueChange={handleValueChange}
            />
          </PrivateRoute>
          <PrivateRoute path="/onboarding/final_values">
            <TopValues
              valueList={values}
              handleValueChange={handleValueChange}
            />
          </PrivateRoute>
          <PrivateRoute path="/onboarding/initial_values">
            <InitialValues handleValueChange={handleValueChange} />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route path="/" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
