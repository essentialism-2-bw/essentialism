import React from 'react';
import { connect } from "react-redux";

import { completeTodo } from '../Redux/userActions';

const Todo = props => {

  return(
    <div className="container">
      <h2 className={props.completed ? 'complete' : ''} 
        onClick={()=> props.completeTodo(props.id)}>{props.item}</h2>
    </div>
  )
};

export default connect(null, { completeTodo })(Todo);