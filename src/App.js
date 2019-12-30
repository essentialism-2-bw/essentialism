import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth";
import InitialValues from "./components/InitialValues";
import TopValues from "./components/TopValues";
import Descriptions from "./components/Descriptions";
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

  return (
    <div
      style={{
        background: `linear-gradient(
      135deg,
      rgba(47, 128, 237, 1) 0%,
      rgb(7, 74, 168) 98%
    )`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "50px"
      }}
    >
      <Router>
        <Switch>
          <Route path="/onboarding/descriptions">
            <Descriptions valueList={values} />
          </Route>
          <Route path="/onboarding/final_values">
            <TopValues
              valueList={values}
              handleValueChange={handleValueChange}
            />
          </Route>
          <Route path="/onboarding/initial_values">
            <InitialValues handleValueChange={handleValueChange} />
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
