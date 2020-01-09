import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getValues, getProjects } from "../Redux/userActions";

const ProPage = props => {
  const userId = localStorage.getItem("id");
  return (
    <div>
      <button onClick={() => props.getValues(userId)}>Get Values</button>
      <button onClick={() => props.getProjects(userId)}>Get Projects</button>
      {/* <Chart />

      <TodoList />

      <ProgressTracker /> */}
    </div>
  );
};

const mapStateToProps = state => ({
  values: state.values,
  projects: state.projects
});
export default connect(mapStateToProps, { getValues, getProjects })(ProPage);
