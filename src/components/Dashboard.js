import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Progress } from "reactstrap";
import TopValueBtn from "./TopValueBtn";
import NoteCard from "./NoteCard";
import ProjectForm from "./ProjectForm";
import { Link } from "react-router-dom";
import PieChart from "./Chart1";
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
        console.log(res.data);
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
      <Row>
        <Col>
          <Link to="/pro">Click here to test pro page</Link>
        </Col>
      </Row>
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
          {!valueLoading && (
            <ProjectForm selectData={values} callSetCount={incrementCount} />
          )}
        </Col>
      </Row>
      <Row>
        {!projectsLoading && projects.length > 0 ? (
          projects.map(project => {
            if (project.completed === "false") {
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
            }
          })
        ) : (
          <Col xs="7">
            <div
              style={{
                padding: "30px",
                borderRadius: "7px",
                boxShadow:
                  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
                marginTop: "20px"
              }}
            >
              <h4>Make your first note by clicking add in the top right -></h4>
              <p>
                You can also remind yourself why you picked each value by
                clicking on them and accessing the description you wrote. You
                can edit your values at any time, and its recomended to for
                growth.
              </p>
              <p>
                To make a note, click add in the top right. Afterwards assign a
                value to that note and write what it is you want to accomplish
                or remind yourself about. Be sure to make the title a short
                summary of the note. The title is what get mainly displayed in a
                vision board manner. Notes can be edited similar to values, with
                the edition of deletion and completion capabilities.
              </p>
              <p>Now get to it!</p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Dashboard;
