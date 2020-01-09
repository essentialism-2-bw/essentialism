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
import ProPage from "./components/ProPage";

function App() {
  const [values, setValues] = useState([]);

  function handleValueChange(list, hasFunc, func) {
    setValues([...list]);
    if (hasFunc) {
      func(list);
    }
  }

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
          <PrivateRoute path="/pro" component={ProPage} />
          <Route path="/login" component={Login} />

          <Route path="/" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
