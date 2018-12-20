import * as React from 'react'
import DocumentTitle from 'react-document-title'
import { Switch, Route } from 'react-router-dom'
import { getRoutes } from '../utils'

type Props = {
  routerData?: any;
  match?: any;
}

export default class UserLayout extends React.PureComponent<Props> {
  public render () {
    const {routerData, match} = this.props
    return (
      <DocumentTitle title="首页">
        <div className="container">
          <header>hello world!!</header>
          <Switch>
            {getRoutes(match.path, routerData).map(item => (
              <Route 
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            ))}
          </Switch>
        </div>
      </DocumentTitle>
    )
  }
}