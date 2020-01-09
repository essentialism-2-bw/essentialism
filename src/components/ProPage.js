import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getValues, getProjects } from "../Redux/userActions";
import Chart from "./Chart";
const ProPage = props => {
  const userId = localStorage.getItem("id");

  useEffect(() => {
    console.log("useEffect is running");
    props.getValues(userId);
    props.getProjects(userId);
  }, []);

  return (
    <div>
      <button onClick={() => props.getValues(userId)}>Get Values</button>
      <button onClick={() => props.getProjects(userId)}>Get Projects</button>

      {/* <Chart /> */}
      {props.values.length > 0 && props.projects.length > 0 && <Chart />}

      {/* <TodoList /> */}

      {/* <ProgressTracker />  */}
    </div>
  );
};

const mapStateToProps = state => ({
  values: state.values,
  projects: state.projects
});
export default connect(mapStateToProps, { getValues, getProjects })(ProPage);
