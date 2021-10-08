import React from 'react'

const counter = ({ header, count, setCount }) => {
  return (
    <div>
      <h1>
        {header} {''} {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default counter
