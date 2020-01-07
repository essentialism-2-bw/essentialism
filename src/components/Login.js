import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../Redux/userActions";

const Login = ({ history, login }) => {
  const [formValue, setFormValue] = useState({ username: "", password: "" });

  const handleChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submit clicked!");
    login(formValue, history);
  };
  return (
    <div>
      <h1>Please Login</h1>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// TODO: loader spinner for isfetching

export default connect(null, { login })(Login);
