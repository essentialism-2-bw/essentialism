import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form } from "reactstrap";

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

  return (
    <div style={{ maxWidth: "800px" }}>
      <Form>
        <h4
          style={{
            minWidth: "800px",
            padding: "30px",
            backgroundColor: "#fff",
            borderRadius: "7px",
            boxShadow:
              "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
            margin: "0 0 30px"
          }}
        >
          Now pick the three values most important to you
          <Link to="/onboarding/descriptions">
            <Button
              color="success"
              onClick={() => {
                props.handleValueChange(selected);
              }}
              style={{
                boxShadow:
                  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
                position: "relative",
                left: "195px"
              }}
            >
              continue
            </Button>
          </Link>
        </h4>
        <div style={{ minHeight: "700px" }}>
          {values.map(value => {
            return (
              <Button
                color="light"
                onClick={addValue}
                style={{
                  margin: "10px 5px"
                }}
              >
                {value}
              </Button>
            );
          })}
        </div>
      </Form>
    </div>
  );
}

export default TopValues;
