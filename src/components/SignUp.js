import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../Redux/userActions";

const SignUp = ({ history, signUp }) => {
  const [formValue, setFormValue] = useState({ username: "", password: "" });

  const handleChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submit clicked!");
    signUp(formValue, history);
  };
  return (
    <div>
      <h1>Please Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          onChange={handleChange}
          value={formValue.username}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={formValue.password}
        />
        {/* <Link to="/onboarding/initial_values"> */}
        <button type="submit">Submit</button>
        {/* </Link> */}
      </form>
      <p>Already have an account? <Link to='/login'>Login Here</Link></p>
    </div>
  );
};

// TODO: loader spinner for isfetching

export default connect(null, { signUp })(SignUp);
