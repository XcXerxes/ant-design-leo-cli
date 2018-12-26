import * as React from 'react'
import { signin } from '../../api/User'

const { Fragment } = React

export default class Analysis extends React.PureComponent {
  public async componentDidMount() {
    try {
      const result = await signin({username: 'admin', password: '123123'})
      console.log(result)
    } catch (error) {
      throw error
    }
  }
  public render() {
    return (
      <Fragment>
        <div>analysis</div>
      </Fragment>
    )
  }
}
