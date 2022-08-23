import React from 'react';
import '../App.css';

function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div className='todoListItem'>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
      </label>    
    </div>
  )
}

export default Todo;