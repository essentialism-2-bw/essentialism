import React, { useState } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../Redux/userActions";

const TodoForm = props => {
  const [form, setForm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(form)
    setForm('')
  }


  return(
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          placeholder='What do you have to do?'
          name='todo'
          value={form}
          onChange={(e) => {
            setForm(e.target.value)
          }}
          />
        <button type='submit'>Add</button>
      </div>
    </form>
  )
};

const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps, { addTodo })(TodoForm);