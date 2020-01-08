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
    paddingLeft: "30px",
    paddingRight: "30px",
    marginTop: "30px"
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/usrValues/${localStorage.getItem("id")}`)
      .then(res => {
        console.log(res.data);
        setValues(res.data);
        setLoad(false);
      });
  }, []);

  return (
    <div>
      <h1>Hello User!</h1>
      <div className="pieChartsDiv">
        <div>
          <h3>Here's the values you've assigned so far:</h3>
          <PieChart />
        </div>
        <div>
          <h3>Here's the values you've completed so far:</h3>
          <PieChart />
        </div>
      </div>

      <Container>
        <Row>
          {!loading &&
            values.map(value => {
              return (
                <TopValueBtn
                  key={value.value_name}
                  value={value.value_name}
                  color={value.color}
                  description={value.importance_description}
                />
              );
            })}
        </Row>
        <Row>
          <NoteCard title="This is a test" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
          <NoteCard title="" />
        </Row>
        <Row>
          <Col>
            <Button
              size="sm"
              color="success"
              style={addNoteStyle}
              onClick={() => {
                setShow(!shouldShow);
              }}
            >
              new note
            </Button>
          </Col>
        </Row>
        {shouldShow && (
          <ProjectForm
            close={() => {
              setShow(!shouldShow);
            }}
          />
        )}
      </Container>
    </div>
  );
}

export default Dashboard;
