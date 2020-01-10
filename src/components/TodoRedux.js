import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import '../styles/todoStyles.css'

const TodoRedux = props => {

  return(
    <div className='redux'>
      <Link className='link' to='/dashboard'>Dashboard</Link>
      <div>
        <h3>What else do you have to do?</h3>
        <p>These are projects not related to your top three values</p>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
};

export default connect(null)(TodoRedux);