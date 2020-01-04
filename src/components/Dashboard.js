import React from "react";
import { useEffect, useState } from "react";
import {
  Button,
  Form,
  Badge,
  Container,
  Row,
  Col,
  UncontrolledCollapse,
  CardBody,
  Card
} from "reactstrap";
import TopValueBtn from "./TopValueBtn";

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
    </Container>
  );
}

export default Dashboard;
