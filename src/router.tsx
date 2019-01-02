import * as React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { getRouterData } from './common/router'
import store from './redux/store'
import { Provider } from 'react-redux'

export default () => {
  const routerData = getRouterData()
  const BasicLayout = routerData['/'].component
  const UserLayout = routerData['/user'].component
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/user" component={UserLayout} />
          <Route
          path="/"
          render={props => <BasicLayout {...props} />}
          />
        </Switch>
      </Router>
    </Provider>
  )
}
