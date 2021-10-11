import React, { useState } from 'react'
import TodoList from './TodoList'

const Form = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    // console.log('hey there')
    e.preventDefault()
    setTodos([
      ...todos,
      {
        text: inputValue,
        completed: false,
        id: Math.random() * 10000,
      },
    ])
    setInputValue('')
  }

  return (
    <form>
      <h2>TodoList</h2>
      <input type='text' onChange={handleInputValue} value={inputValue} />

      <button onClick={handleSubmit}>Submit</button>
      <TodoList todos={todos} setTodos={setTodos} />
    </form>
  )
}

export default Form
