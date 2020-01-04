import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormGroup,
  Badge,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

function Descriptions(props) {
  const stateObject = props.valueList.map(value => {
    return { value, description: "" };
  });
  const [descriptions, setDescription] = useState(stateObject);

  useEffect(() => {}, []);

  function handleChange(event) {
    let newDescriptions = [...descriptions];
    newDescriptions.forEach(pair => {
      if (pair.value === event.target.id) {
        pair.description = event.target.value;
      }
    });
    console.log(descriptions);
    setDescription(newDescriptions);
  }

  return (
    <Container>
      <Col>
        <Form>
          <h4
            style={{
              margin: "0 0 30px"
            }}
          >
            <Badge
              style={{
                padding: "30px 100px 30px 30px",
                backgroundColor: "#fff",
                borderRadius: "7px",
                boxShadow:
                  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
                fontSize: "inherit",
                color: "inherit",
                fontWeight: "inherit"
              }}
            >
              Please describe why each value is important to you
            </Badge>
            <Link to="/dashboard">
              <Button
                color="success"
                style={{
                  boxShadow:
                    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
                  marginLeft: "-60px"
                }}
              >
                submit
              </Button>
            </Link>
          </h4>
          <div style={{ minHeight: "700px" }}>
            {descriptions.map(valuePairs => {
              return (
                <FormGroup>
                  <h4>
                    <Badge
                      color="warning"
                      style={{
                        margin: "10px 5px"
                      }}
                    >
                      {valuePairs.value}
                    </Badge>
                  </h4>
                  <Input
                    id={valuePairs.value}
                    type="textarea"
                    onChange={handleChange}
                    name="text"
                    style={{ height: "150px", resize: "none" }}
                  />
                </FormGroup>
              );
            })}
          </div>
        </Form>
      </Col>
    </Container>
  );
}

export default Descriptions;
