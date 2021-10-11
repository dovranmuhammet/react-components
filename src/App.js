import React from 'react'
import Counter from './components/Counter'
import Fetch from './components/Fetch'
import Form from './todo/Form'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/counter' exact component={Counter} />
          <Route path='/todo' exact component={Form} />
          <Route path='/fetch' exatct component={Fetch} />
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
export default App
