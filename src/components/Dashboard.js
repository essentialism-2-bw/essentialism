import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import TopValueBtn from "./TopValueBtn";
import NoteCard from "./NoteCard";

function Dashboard(props) {
  const [values] = useState(props.valueList);
  const [selected, setSelected] = useState([]);

  const addNoteStyle = {
    paddingLeft: "30px",
    paddingRight: "30px",
    marginTop: "30px"
  };

  return (
    <Container>
      <Row>
        {props.valueList.map(value => {
          return (
            <TopValueBtn
              key={value.value}
              value={value.value}
              color={value.color}
              description={value.description}
            />
          );
        })}
      </Row>
      <Row>
        <NoteCard title="" />
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
          <Button size="sm" color="success" style={addNoteStyle}>
            new note
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
