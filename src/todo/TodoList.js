import React from 'react'
const TodoList = ({ todos, setTodos }) => {
  console.log(todos)

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => setTodos(todos.filter((el) => el.id !== todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
