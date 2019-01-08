import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Authorized from './Authorized'

type Props = {
  component: any;
  render: (props: any) => any;
  authority: string | Function | Array<any>;
  redirectPath: any;
}

export default class AuthorizedRoute extends React.PureComponent<Props> {
  public render() {
    const {component: Component, render, authority, redirectPath, ...rest} = this.props
    return (
      <Authorized 
        authority={authority}
        noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath}} />} />}
      >
        <Route {...rest} render={(props:any) => (Component ? <Component {...props} /> : render(props))} />
      </Authorized>
    )
  }
}
