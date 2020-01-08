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

export default function ProjectForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    axiosWithAuth()
      .post(`api/projects/${localStorage.getItem("id")}`, {
        user_id: parseInt(localStorage.getItem("id")),
        ...data
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "30px" }}>
      <FormGroup>
        <Row>
          <Col xs="5">
            <Input
              name="project_title"
              placeholder="Title your note"
              innerRef={register}
            />
          </Col>

          <Col xs="3">
            <Input type="select" name="user_values_id" innerRef={register}>
              <option selected disabled>
                Select a value
              </option>
              <option value={props.selectData[0].id}>
                {props.selectData[0].value_name}
              </option>
              <option value={props.selectData[1].id}>
                {props.selectData[1].value_name}
              </option>
              <option value={props.selectData[2].id}>
                {props.selectData[2].value_name}
              </option>
            </Input>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xs="8">
            <Input
              type="textarea"
              name="project_description"
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
          <Button color="dark" onClick={props.close}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
