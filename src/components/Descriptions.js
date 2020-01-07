import React from "react";
import axios from "axios";
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
import axiosWithAuth from "../Utils/axiosWithAuth";

const colors = ["#F1EC7C", "#AE8BDB", "#F9BA5C"];

function Descriptions(props) {
  const stateObject = props.valueList.map(value => {
    return {
      value_name: value,
      color: colors[props.valueList.indexOf(value)],
      importance_description: ""
    };
  });
  const [descriptions, setDescription] = useState(stateObject);

  useEffect(() => {}, []);

  function handleChange(event) {
    let newDescriptions = [...descriptions];
    newDescriptions.forEach(pair => {
      if (pair.value_name === event.target.id) {
        pair.importance_description = event.target.value;
      }
    });
    setDescription(newDescriptions);
  }

  function postValues(valueList) {
    /* axiosWithAuth()({
      method: "post",
      url: "api/usrValues/",
      data: valueList
    }) */
    axiosWithAuth()
      .post("api/usrValues/", { data: valueList })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
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
        <Form
          onSubmit={() => {
            props.handleValueChange();
          }}
        >
          <h4 style={headerMargin}>
            <Badge style={headerStyle}>
              Please describe why each value is important to you
            </Badge>
            <Link to="/dashboard">
              <Button
                color="success"
                style={submitStyle}
                onClick={() => {
                  props.handleValueChange(
                    descriptions,
                    true,
                    postValues,
                    85471405814058
                  );
                }}
              >
                submit
              </Button>
            </Link>
          </h4>
          <div style={bodyHeight}>
            {descriptions.map(valuePairs => {
              return (
                <FormGroup key={valuePairs.value_name}>
                  <h4>
                    <Badge color="warning" style={inputTitleStyle}>
                      {valuePairs.value_name}
                    </Badge>
                  </h4>
                  <Input
                    id={valuePairs.value_name}
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
