import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'; // library to create random ids for the data being entered
import '../App.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // todos is every to do item saved in the list
  // setTodos is the function to update the list
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // loads the to do items that were saved in the key on page load
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // stores the to do items so it rememebers on refresh/page load
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // toggles the to do from complete to imcomplete and vice versa   
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  // adds the value entered into a to do list
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  // clears the completed items
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <div className='todoContainer'>
      <h1>React To Do List</h1>
      <h2>{todos.filter(todo => !todo.complete).length} things left to do</h2>
      <input className='todoContainerEnter' ref={todoNameRef} type="text" placeholder="Enter Something To Do Here..." />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </>
  )
}

export default App;