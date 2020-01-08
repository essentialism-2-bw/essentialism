import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Badge, Container, Row, Col } from "reactstrap";
import axiosWithAuth from "../Utils/axiosWithAuth";

function InitialValues(props) {
  const [values, setValues] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("api/values/")
      .then(res => {
        console.log(res.data);
        setValues(res.data);
      })
      .catch(error => console.log(error));
  }, []);
  function addValue(event) {
    if (event.target.classList.contains("btn-light")) {
      event.target.classList.remove("btn-light");
      event.target.classList.add("btn-warning");
      setSelected([...selected, event.target.textContent]);
    } else {
      event.target.classList.add("btn-light");
      event.target.classList.remove("btn-warning");
      const newList = selected.filter(
        value => value !== event.target.textContent
      );
      setSelected(newList);
    }
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

  const bodyHeight = {
    height: "700px",
    overflow: "hidden",
    overflowY: "scroll"
  };

  const inputBtnStyle = {
    margin: "10px 5px"
  };

  const valueStyle = { margin: "5px" };

  return (
    <Container>
      <Col>
        <Form
          onSubmit={() => {
            props.handleValueChange();
          }}
          value={selected}
        >
          <h4 style={headerMargin}>
            <Badge style={headerStyle}>
              Pick the values which resonate with you
            </Badge>
            <Link to="/onboarding/final_values">
              <Button
                color="success"
                onClick={() => {
                  props.handleValueChange(selected, false);
                }}
                style={submitStyle}
              >
                continue
              </Button>
            </Link>
          </h4>
          {selected.length > 0 &&
            selected.map(value => {
              return <Badge style={valueStyle}>{value}</Badge>;
            })}
          <div style={bodyHeight}>
            {values.map(value => {
              return (
                <Button
                  color="light"
                  onClick={addValue}
                  style={inputBtnStyle}
                  key={value.name}
                >
                  {value.name}
                </Button>
              );
            })}
          </div>
        </Form>
      </Col>
    </Container>
  );
}

export default InitialValues;
