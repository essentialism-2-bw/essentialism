import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, Badge, Container, Row, Col } from "reactstrap";

function TopValues(props) {
  function addValue(event) {
    if (event.target.classList.contains("btn-light")) {
      if (selected.length < 3) {
        event.target.classList.remove("btn-light");
        event.target.classList.add("btn-warning");
        setSelected([...selected, event.target.textContent]);
      }
    } else {
      event.target.classList.add("btn-light");
      event.target.classList.remove("btn-warning");
      const newList = selected.filter(
        value => value !== event.target.textContent
      );
      setSelected(newList);
    }
  }

  const [values] = useState(props.valueList);
  const [selected, setSelected] = useState([]);

  /* useEffect(() => {
    console.log(selected);
  }, [selected]); */

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

  const inputBtnStyle = {
    margin: "10px 5px"
  };

  return (
    <Container>
      <Col>
        <Form>
          <h4 style={headerMargin}>
            <Badge style={headerStyle}>
              Now pick the three values most important to you
            </Badge>
            <Link to="/onboarding/descriptions">
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
          <div style={bodyHeight}>
            {values.map(value => {
              return (
                <Button
                  color="light"
                  onClick={addValue}
                  style={inputBtnStyle}
                  key={value}
                >
                  {value}
                </Button>
              );
            })}
          </div>
        </Form>
      </Col>
    </Container>
  );
}

export default TopValues;
