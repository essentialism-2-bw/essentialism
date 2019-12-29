import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./components/Auth";
import "./App.css";

function App() {
  return (
    <div
      style={{
        background: `linear-gradient(
      135deg,
      rgba(47, 128, 237, 1) 0%,
      rgb(7, 74, 168) 98%
    )`,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Router>
        <Switch>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
