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

import { useForm } from "react-hook-form";
import axiosWithAuth from "../Utils/axiosWithAuth";

function TopValueBtn(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const [modal, setModal] = useState(false);
  const [isEditing, setEdit] = useState(false);
  const [valueObj, setValueObj] = useState(props.valueObj);

  const toggle = () => setModal(!modal);

  const onSubmit = data => {
    setValueObj({ ...valueObj, ...data });
    axiosWithAuth()
      .put("api/usrValues/", { ...valueObj, ...data })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    document.getElementById(props.value).setAttribute("disabled", "true");
    setEdit(false);
  };

  const btnStyle = {
    paddingLeft: "30px",
    paddingRight: "30px",
    backgroundColor: props.color,
    borderColor: props.color
  };

  return (
    <div>
      <Col>
        <Button size="sm" onClick={toggle} style={btnStyle}>
          {props.value}
        </Button>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{props.value}</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Row>
                  <Col>
                    <Input
                      style={{ minHeight: "500px" }}
                      id={props.value}
                      type="textarea"
                      name="importance_description"
                      placeholder={props.description}
                      innerRef={register}
                      disabled
                    />
                  </Col>
                </Row>
              </FormGroup>
              {errors.selectValue && (
                <Alert color="danger">This is required</Alert>
              )}
              {isEditing && (
                <Button
                  type="submit"
                  color="success"
                  style={{ marginRight: "20px" }}
                >
                  Create
                </Button>
              )}
            </Form>
          </ModalBody>
          <ModalFooter>
            {!isEditing && (
              <Button
                color="primary"
                onClick={() => {
                  document
                    .getElementById(props.value)
                    .removeAttribute("disabled");
                  document.getElementById(props.value).focus();
                  setEdit(true);
                }}
              >
                Edit
              </Button>
            )}
            {isEditing && (
              <Button
                color="dark"
                onClick={() => {
                  document
                    .getElementById(props.value)
                    .setAttribute("disabled", "true");
                  setEdit(false);
                }}
              >
                Cancel
              </Button>
            )}
          </ModalFooter>
        </Modal>
      </Col>
    </div>
  );
}

export default TopValueBtn;
