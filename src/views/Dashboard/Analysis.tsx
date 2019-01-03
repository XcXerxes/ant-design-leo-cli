import * as React from 'react'
import * as numeral from 'numeral'
import {
  Row,
  Col,
  Tooltip,
  Icon
} from 'antd'
import ChartCard from '../../components/Charts/ChartCard'
import {
  yuan,
  Field
} from '../../components/Charts'
import Trend from '../../components/Trend'
import { connect } from 'react-redux'
import { fakeChart } from '../../redux/actions/charts'

const { Fragment } = React

const Yuan = (props:any) => (
  <span dangerouslySetInnerHTML={{ __html: yuan(props.children)}} />
)

type State = {
  loading1: boolean;
}
type Props = {
  loading?: boolean;
  fakeChart: () => any; 
}


class Analysis extends React.PureComponent<Props, State> {
  public state = {
    loading1: false
  }
  public async componentDidMount() {
    try {
      await this.props.fakeChart()
      console.log(this.props)
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
    const { loading } = this.props
    return (
      <Fragment>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <ChartCard
              title="总销售额"
              loading={loading}
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={() => <Yuan>125500</Yuan> }
              footer={<Field label="日均销售额" value={<Yuan>12423</Yuan>} />}
              contentHeight={40}
            >
              <Trend flag="up" style={{marginRight: '16px'}}  >
                周同比
                <span >12%</span>
              </Trend>
              <Trend flag="down" >
                日环比
                <span>11%</span>
              </Trend>
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps} >
            <ChartCard
              title="访问量"
              loading={loading}
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(8848).format('0,0')}
              footer={<Field label="日均销售额" value={numeral(1234).format('0,0')} />}
              contentHeight={40}
            >
              <span>1234</span>
            </ChartCard>
          </Col>
        </Row>
        <div>analysis</div>
      </Fragment>
    )
  }
}

export default connect(((state:any) => ({
  charts: state.fakeCharts.charts,
  loading: state.fakeCharts.loading
})), { fakeChart })(Analysis)
