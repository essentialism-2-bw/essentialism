import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getValues, getProjects } from "../Redux/userActions";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
const Chart = props => {
  console.log(props);
  useEffect(() => {
    console.log("useEffect is running");
    props.getValues(localStorage.getItem("id"));
    props.getProjects(localStorage.getItem("id"));
  }, []);

  const completedProjects = props.projects.filter(
    project => project.completed === "false"
  ); // TODO: need to change back to true when true false function is working

  const completedValue1 = completedProjects.filter(
    project => project.user_values_id === props.values[0].id
  ).length;
  const completedValue2 = completedProjects.filter(
    project => project.user_values_id === props.values[1].id
  ).length;
  const completedValue3 = completedProjects.filter(
    project => project.user_values_id === props.values[2].id
  ).length;

  if (props.values.length > 0) {
    console.log("Hey");
    console.log(
      completedProjects,
      completedValue1,
      completedValue2,
      completedValue3,
      props.values[0].id
    );
  }

  return (
    <div>
      <div className="pieChartDiv">
        <Chart1
          values={props.values}
          completedValue1={completedValue1}
          completedValue2={completedValue2}
          completedValue3={completedValue3}
        />
        <Chart2
          projects={props.projects}
          completedProjects={completedProjects}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  values: state.values,
  projects: state.projects
});
export default connect(mapStateToProps, { getValues, getProjects })(Chart);

// export default Chart;
