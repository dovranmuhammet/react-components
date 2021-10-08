import React, { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <Counter header='Counter:' count={count} setCount={setCount} />
    </div>
  )
}

export default App
