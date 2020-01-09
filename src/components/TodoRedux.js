import React from "react";
import { connect } from "react-redux";

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoRedux = () => {
  return(
    <>
      <h3>What else do you have to do?</h3>
      <TodoForm />
      <TodoList />
    </>
  )
};

export default connect(null)(TodoRedux);