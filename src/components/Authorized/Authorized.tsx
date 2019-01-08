import * as React from 'react'
import CheckPermissions from './CheckPermissions'

type Props = {
  children: React.ReactNode;
  authority: string | Array<any> | Function;
  noMatch: any;
}
export default class Authorized extends React.PureComponent<Props> {
  public render() {
    const { children, authority, noMatch = null } = this.props
    const childrenRender = typeof children === 'undefined' ? null : children
    return CheckPermissions(authority, childrenRender, noMatch)
  }
}
