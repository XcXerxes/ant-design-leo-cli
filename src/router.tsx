import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

export default ({history, app}) => {
  return (
    <Switch>
      <Route path="/user" component={UserLayout} />
    </Switch>
  )
}
