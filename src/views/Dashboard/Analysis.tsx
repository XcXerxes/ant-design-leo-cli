import * as React from 'react'
import { signin } from '../../api/User'
import {
  Row,
  Col
} from 'antd'

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
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: {marginBottom: 24}
    }
    return (
      <Fragment>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
          </Col>
        </Row>
        <div>analysis</div>
      </Fragment>
    )
  }
}
