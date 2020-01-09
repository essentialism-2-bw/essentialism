import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
  Row,
  Col
} from "reactstrap";

import axiosWithAuth from "../Utils/axiosWithAuth";

import { useForm } from "react-hook-form";

function NoteCard(props) {
  let hexColor;

  props.colors &&
    props.colors.forEach(color => {
      if (color.valid == props.valueId) {
        hexColor = color.color;
      }
    });

  const cardStyle = {
    minWidth: "180px",
    backgroundColor: hexColor,
    borderRadius: "7px",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    padding: "10px 20px",
    marginTop: "30px",
    color: "#fff"
  };

  const { register, handleSubmit, watch, errors } = useForm();

  const [project, setProject] = useState(props.project);
  const [modal, setModal] = useState(false);
  const [isEditing, setEdit] = useState(false);

  const toggle = () => setModal(!modal);

  const onSubmit = data => {
    setProject({ ...project, ...data });
    axiosWithAuth()
      .put(`/api/projects/${localStorage.getItem("id")}/${project.id}`, {
        ...project,
        ...data,
        completed: false
      })
      .then(function(response) {
        console.log("onSubmit response: ", response);
        props.callSetCount();
      })
      .catch(function(error) {
        console.log(error);
      });
    document
      .getElementById("note" + props.key)
      .setAttribute("disabled", "true");
    setEdit(false);
  };

  function completedProject() {
    axiosWithAuth()
      .put(`/api/projects/${localStorage.getItem("id")}/${project.id}`, {
        ...project,
        completed: true
      })
      .then(function(response) {
        console.log("completedProject response: ", response);
        props.callSetCount();
        toggle();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <span>
      <Col key={props.key} onClick={toggle}>
        <div
          style={cardStyle}
          onClick={toggle}
          onMouseOver={event => {
            event.target.style.cursor = "pointer";
          }}
        >
          <h4>{props.title !== "" ? props.title : "make a new note..."}</h4>
        </div>
      </Col>

      <Modal isOpen={modal} toggle={toggle} style={{ color: "#fff" }}>
        <ModalHeader
          toggle={toggle}
          style={{ backgroundColor: hexColor, color: "#fff" }}
        >
          {props.title}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    style={{ minHeight: "500px" }}
                    id={"note" + props.key}
                    type="textarea"
                    name="project_description"
                    placeholder={props.description}
                    innerRef={register}
                    disabled
                  />
                </Col>
              </Row>
            </FormGroup>
            {isEditing && (
              <Button type="submit" color="success">
                Create
              </Button>
            )}
          </Form>
        </ModalBody>
        <ModalFooter>
          {!isEditing && (
            <div>
              <Button
                color="primary"
                style={{ marginRight: "20px" }}
                onClick={() => {
                  document
                    .getElementById("note" + props.key)
                    .removeAttribute("disabled");
                  document.getElementById("note" + props.key).focus();
                  setEdit(true);
                }}
              >
                Edit
              </Button>
              <Button
                color="success"
                style={{ marginRight: "20px" }}
                onClick={() => completedProject()}
              >
                Completed
              </Button>
              <Button
                color="danger"
                onClick={() => props.deleteNote(props.project.id)}
              >
                Delete
              </Button>
            </div>
          )}
          {isEditing && (
            <Button
              color="dark"
              onClick={() => {
                document
                  .getElementById("note" + props.key)
                  .setAttribute("disabled", "true");
                setEdit(false);
              }}
            >
              Cancel
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </span>
  );
}

export default NoteCard;
