import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Progress } from "reactstrap";
import TopValueBtn from "./TopValueBtn";
import NoteCard from "./NoteCard";
import ProjectForm from "./ProjectForm";

import PieChart from "./Charts";
import axiosWithAuth from "../Utils/axiosWithAuth";

function Dashboard(props) {
  const [shouldShow, setShow] = useState(false);
  const [loading, setLoad] = useState(true);
  const [values, setValues] = useState();
  const [selected, setSelected] = useState([]);

  const addNoteStyle = {
    paddingLeft: "20px",
    paddingRight: "20px"
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/usrValues/${localStorage.getItem("id")}`)
      .then(res => {
        setValues(res.data);
        setLoad(false);
      });
  }, []);

  return (
    <Container>
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
            {!loading &&
              values.map(value => {
                return (
                  <TopValueBtn
                    key={value.value_name}
                    value={value.value_name}
                    color={value.color}
                    description={value.importance_description}
                    valueObj={value}
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
          <NoteCard title="" />
        </Row>
        {shouldShow && (
          <ProjectForm
            close={() => {
              setShow(!shouldShow);
            }}
          />
        )}
      </Col>
    </Container>
  );
}

export default Dashboard;
