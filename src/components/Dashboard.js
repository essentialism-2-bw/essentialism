import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Progress } from "reactstrap";
import TopValueBtn from "./TopValueBtn";
import NoteCard from "./NoteCard";
import ProjectForm from "./ProjectForm";
import { Link } from "react-router-dom";
import PieChart from "./Charts";
import axiosWithAuth from "../Utils/axiosWithAuth";

function Dashboard(props) {
  const [shouldShow, setShow] = useState(false);
  const [valueLoading, setValueLoad] = useState(true);
  const [values, setValues] = useState();
  const [projectsLoading, setProjectsLoad] = useState(true);
  const [projects, setProjects] = useState();
  const [counter, setCount] = useState(0);
  const [colorArray, setColorObject] = useState([]);

  const addNoteStyle = {
    paddingLeft: "20px",
    paddingRight: "20px"
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/usrValues/${localStorage.getItem("id")}`)
      .then(res => {
        setValues(res.data);
        let colorArray = [];
        res.data.forEach(val => {
          let valid = val.id;
          let color = val.color;
          colorArray.push({ color, valid });
        });
        setValueLoad(false);
        return colorArray;
      })
      .then(colors => {
        setColorObject(colors);
      });
    axiosWithAuth()
      .get(`/api/projects/${localStorage.getItem("id")}`)
      .then(res => {
        setProjects(res.data);
        setProjectsLoad(false);
      });
  }, [counter]);

  function incrementCount() {
    let place = counter;
    setCount((place += 1));
  }

  function deleteNote(project_id) {
    axiosWithAuth()
      .delete(`/api/projects/${localStorage.getItem("id")}/${project_id}`)
      .then(res => {
        incrementCount();
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      {/* this link is to test out pro page */}
      <Link to="/pro">Click here to test pro page</Link>

      {/* <h1>Hello User!</h1>
      <div className="pieChartsDiv">
        <div>
          <h3>Here's the values you've assigned so far:</h3>
          <PieChart />
        </div>
        <div>
          <h3>Here's the values you've completed so far:</h3>
          <PieChart />
        </div>
      </div> */}
      <Col>
        <Row>
          <Col xs="10">
            {!valueLoading &&
              values.map(value => {
                return (
                  <TopValueBtn
                    key={value.value_name}
                    value={value.value_name}
                    color={value.color}
                    description={value.importance_description}
                    valueObj={value}
                    callSetCount={incrementCount}
                  />
                );
              })}
          </Col>
          <Col xs="2">
            <Button
              size="sm"
              color="success"
              style={addNoteStyle}
              onClick={() => {
                setShow(!shouldShow);
              }}
            >
              Add +
            </Button>
          </Col>
        </Row>
        <Row>
          {!projectsLoading && projects.length > 0 ? (
            projects.map(project => {
              return (
                <NoteCard
                  project={project}
                  title={project.project_title}
                  key={project.id}
                  colors={colorArray}
                  valueId={project.user_values_id}
                  description={project.project_description}
                  deleteNote={deleteNote}
                  callSetCount={incrementCount}
                />
              );
            })
          ) : (
            <NoteCard title="" />
          )}
        </Row>
        {shouldShow && (
          <ProjectForm
            close={() => {
              setShow(!shouldShow);
            }}
            selectData={values}
            callSetCount={incrementCount}
          />
        )}
      </Col>
    </Container>
  );
}

export default Dashboard;
