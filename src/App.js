import React from "react";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth";
import InitialValues from "./components/InitialValues";
import TopValues from "./components/TopValues";
import Descriptions from "./components/Descriptions";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  const [values, setValues] = useState([]);

  /* useEffect(() => {
    console.log(values);
  }, [values]); */

  function handleValueChange(list) {
    console.log("submited values", list);
    setValues([...list]);
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
    background: `linear-gradient(
  135deg,
  rgba(47, 128, 237, 1) 0%,
  rgb(7, 74, 168) 98%
)`,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px"
  };

  return (
    <div style={appBackgroundStyle}>
      <Switch>
        <Route path="/dashboard">
          <Dashboard valueList={placeholderList} />
        </Route>
        <Route path="/onboarding/descriptions">
          <Descriptions valueList={values} />
        </Route>
        <Route path="/onboarding/final_values">
          <TopValues valueList={values} handleValueChange={handleValueChange} />
        </Route>
        <Route path="/onboarding/initial_values">
          <InitialValues handleValueChange={handleValueChange} />
        </Route>
        <Route path="/" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
