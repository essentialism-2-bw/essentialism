import React, { useState } from "react";
import { Col } from "reactstrap";

function NoteCard(props) {
  return (
    <Col>
      <div
        style={{
          height: "100px",
          minWidth: "180px",
          backgroundColor: "#fff",
          borderRadius: "7px",
          boxShadow:
            "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
          padding: "10px 20px",
          marginTop: "30px"
        }}
      >
        <h4>{props.title !== "" ? props.title : "make a new note..."}</h4>
      </div>
    </Col>
  );
}

export default NoteCard;
