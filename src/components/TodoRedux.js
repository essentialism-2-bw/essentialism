import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoRedux = () => {
  return(
    <>
      <Link to='/dashboard'>Dashboard</Link>
      <div>
        <h3>What else do you have to do?</h3>
        <TodoForm />
        <TodoList />
      </div>
    </>
  )
};

export default connect(null)(TodoRedux);