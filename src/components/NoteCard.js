import React, { useState } from "react";
import { Col } from "reactstrap";

function NoteCard(props) {
  console.log(props);

  let hexColor;

  props.colors &&
    props.colors.forEach(color => {
      if (color.valid == props.valueId) {
        hexColor = color.color;
      }
    });

  const cardStyle = {
    height: "100px",
    minWidth: "180px",
    backgroundColor: "#fff",
    borderRadius: "7px",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    padding: "10px 20px",
    marginTop: "30px",
    color: hexColor,
    border: `5px solid ${hexColor}`
  };

  return (
    <Col xs="3" key={props.id}>
      <div style={cardStyle}>
        <h4>{props.title !== "" ? props.title : "make a new note..."}</h4>
      </div>
    </Col>
  );
}

export default NoteCard;
