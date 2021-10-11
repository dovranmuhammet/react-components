import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Nav = () => {
  const navStyle = {
    color: 'white',
  }
  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <h3>Home</h3>
        </Link>
        <Link style={navStyle} to='/counter'>
          <li>Counter</li>
        </Link>
        <Link style={navStyle} to='/fetch'>
          <li>Fetch</li>
        </Link>
        <Link style={navStyle} to='/todo'>
          <li>Todo</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
