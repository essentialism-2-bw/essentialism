import React from "react";
/* import { useEffect, useState } from "react"; */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Input } from "reactstrap";

function Auth() {
  const { register, /* handleSubmit, watch, */ errors } = useForm();
  /* const onSubmit = data => {
      console.log(data);
  }; */

  // console.log(watch("example")); // watch input value by passing the name of it

  const formStyle = {
    width: "450px",
    padding: "30px",
    marginTop: "-50px",
    backgroundColor: "#fff",
    borderRadius: "7px",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    alignSelf: "center"
  };

  const headStyle = { margin: "0 0 20px" };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form
      /* onSubmit={handleSubmit(onSubmit)} */
      style={formStyle}
    >
      <h4 style={headStyle}>Login</h4>

      <FormGroup>
        {/* register your input into the hook by invoking the "register" function */}
        <Input
          name="example"
          /* defaultValue="test" */
          ref={register}
          placeholder="email"
        />
      </FormGroup>

      <FormGroup>
        {/* include validation with required or other standard HTML validation rules */}
        <Input
          name="exampleRequired"
          ref={register({ required: true })}
          placeholder="password"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      </FormGroup>

      <Link to="/onboarding/initial_values">
        <Button size="md" type="submit">
          Submit
        </Button>
      </Link>
    </Form>
  );
}

export default Auth;
