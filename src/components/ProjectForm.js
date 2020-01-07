import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
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

export default function ProjectForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    axiosWithAuth()
      .post("api/projects/", data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  /* console.log(watch("example")); // watch input value by passing the name of it */

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Row>
          <Col xs="5">
            <Input
              name="title"
              placeholder="Title your note"
              innerRef={register}
            />
          </Col>

          <Col xs="3">
            <Input type="select" name="selectValue" innerRef={register}>
              <option selected disabled>
                Select a value
              </option>
              <option value="Love">Love</option>
              <option value="Peace">Peace</option>
              <option value="Harmony">Harmony</option>
            </Input>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xs="8">
            <Input
              type="textarea"
              name="noteText"
              style={{ height: "350px" }}
              innerRef={register}
              placeholder="Let's get started..."
            />
          </Col>
        </Row>
      </FormGroup>
      {errors.selectValue && <Alert color="danger">This is required</Alert>}

      <Row style={{ marginBottom: "15px" }}>
        <Col>
          <Button type="submit" color="success">
            Create
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="dark">Cancel</Button>
        </Col>
      </Row>
    </Form>
  );
}
