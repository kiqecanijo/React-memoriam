import React from 'react'
//import FacebookLogin from 'react-facebook-login'

import Memoriam from './memoriam'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './about'

const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>
    <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
    <Route path={`${match.path}/:id`} component={Topic} />
  </div>
)

const Header = () => (
  <ul>
    <li>
      <Link to="/memory">
        <b>Memory Game</b>
      </Link>
    </li>
    <li>
      <Link to="/about">
        <b>About</b>
      </Link>
    </li>
    <li>
      <Link to="/topics">
        <b>Topics</b>
      </Link>
    </li>
  </ul>
)

const AppRouter = () => (
  <Router>
    <div style={{ margin: 'auto', width: '85%' }}>
      <Header />
      <Route exact path="/memory" component={Memoriam} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

export default AppRouter
