import React from 'react'
import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import DevBuyFlow from './containers/DevBuyFlow'
import {
  PRODUCT_IDS_DETAILS,
  ProductIds,
} from 'src/containers/GenericFlow/index.constants'
import './App.css'
import FlowDescription from 'src/containers/GenericFlow/FlowDescription'
import DesignBuyFlow from 'src/containers/DesignBuyFlow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path={PRODUCT_IDS_DETAILS[ProductIds.devIns].startLink}>
            <DevBuyFlow productId={ProductIds.devIns} />
          </Route>
          <Route path={PRODUCT_IDS_DETAILS[ProductIds.desIns].startLink}>
            <DesignBuyFlow productId={ProductIds.desIns} />
          </Route>
          <Route path="/buy">
            <FlowDescription />
          </Route>
          <Redirect to={PRODUCT_IDS_DETAILS[ProductIds.devIns].startLink} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
