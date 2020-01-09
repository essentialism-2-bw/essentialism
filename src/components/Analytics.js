import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getValues, getProjects } from "../Redux/userActions";
import Chart from "./Chart";
import TodoRedux from './TodoRedux';
const ProPage = props => {
  const userId = localStorage.getItem("id");

  useEffect(() => {
    console.log("useEffect is running");
    props.getValues(userId);
    props.getProjects(userId);
  }, []);

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>

      {/* <Chart /> */}
      {props.values.length > 0 && props.projects.length > 0 && <Chart />}

      {/* <TodoList /> */}
      <TodoRedux />

      {/* <ProgressTracker />  */}
    </div>
  );
};

const mapStateToProps = state => ({
  values: state.values,
  projects: state.projects
});
export default connect(mapStateToProps, { getValues, getProjects })(ProPage);
