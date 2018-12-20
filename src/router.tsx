import * as React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { getRouterData } from './common/router'

export default () => {
  const routerData = getRouterData()
  const BasicLayout = routerData['/'].component
  const UserLayout = routerData['/user'].component
  return (
    <Router>
      <Switch>
        <Route path="/user" component={UserLayout} />
        <Route
        path="/"
        render={props => <BasicLayout {...props} />}
        />
      </Switch>
    </Router>
  )
}
