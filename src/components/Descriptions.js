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

  const headerStyle = {
    padding: "30px 100px 30px 30px",
    backgroundColor: "#fff",
    borderRadius: "7px",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    fontSize: "inherit",
    color: "inherit",
    fontWeight: "inherit"
  };

  const headerMargin = {
    margin: "0 0 30px"
  };

  const submitStyle = {
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    marginLeft: "-60px"
  };

  const bodyHeight = { minHeight: "700px" };

  const inputTitleStyle = {
    margin: "10px 5px"
  };

  const inputStyle = { height: "150px", resize: "none" };

  return (
    <Container>
      <Col>
        <Form>
          <h4 style={headerMargin}>
            <Badge style={headerStyle}>
              Please describe why each value is important to you
            </Badge>
            <Link to="/dashboard">
              <Button color="success" style={submitStyle}>
                submit
              </Button>
            </Link>
          </h4>
          <div style={bodyHeight}>
            {descriptions.map(valuePairs => {
              return (
                <FormGroup>
                  <h4>
                    <Badge color="warning" style={inputTitleStyle}>
                      {valuePairs.value}
                    </Badge>
                  </h4>
                  <Input
                    id={valuePairs.value}
                    type="textarea"
                    onChange={handleChange}
                    name="text"
                    style={inputStyle}
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
