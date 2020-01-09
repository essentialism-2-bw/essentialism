import React from 'react';
import { connect } from "react-redux";

import Todo from './Todo';

const TodoList = props => {
  console.log("TodoList", props.todo)
  return(
    <div>
      {props.todo.map((item) => {
        return <Todo {...item} key={item.id} />
      })}
    </div>
  )
};

const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps, {})(TodoList);