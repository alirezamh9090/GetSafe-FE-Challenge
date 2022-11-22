import React from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow from './containers/buyflow/Buyflow'
import './App.css'
import { ProductIds } from 'src/containers/GenericFlow/index.constants'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Developer Insurance</p>
            <Link to="/buy/insurance_dev">Get started!</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
