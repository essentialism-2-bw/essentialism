import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import TopValueBtn from "./TopValueBtn";
import NoteCard from "./NoteCard";

function Dashboard(props) {
  const [values] = useState(props.valueList);
  const [selected, setSelected] = useState([]);

  return (
    <Container>
      <Row>
        {props.valueList.map(value => {
          return (
            <TopValueBtn
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
    </Container>
  );
}

export default Dashboard;
