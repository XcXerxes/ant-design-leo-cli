import * as React from 'react'
import * as numeral from 'numeral'
import * as styles from './Analysis.scss'
import {
  Row,
  Col,
  Tooltip,
  Icon
} from 'antd'
import ChartCard from '../../components/Charts/ChartCard'
import {
  yuan,
  Field,
  MiniArea,
  MiniBar,
  MiniPorgress
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
  percent: number;
}
type Props = {
  loading?: boolean;
  fakeChart: () => any;
  charts?: any;
}


class Analysis extends React.PureComponent<Props, State> {
  public state = {
    loading1: false,
    percent: 0
  }
  public async componentDidMount() {
    try {
      await this.props.fakeChart()
      setTimeout(() => {
        this.setState({
          percent: 78
        })
      }, 2000)
      console.log(this.props)
    } catch (error) {
      throw error
    }
  }
  public render() {
    const { percent } = this.state
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: {marginBottom: 24}
    }
    const { loading, charts } = this.props
    const {
      visitData
    } = charts
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
              <MiniArea data={visitData} color="#975fe4" />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              title="支付笔数"
              loading={loading}
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(8000).format('0,0')}
              footer={<Field label="转化率" value="60%" />}
              contentHeight={40}
            >
              <MiniBar data={visitData} />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps} >
            <ChartCard
              title="运营活动效果"
              loading={loading}
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total="78%"
              footer={
                <div className={styles.activityWrap}>
                  <Trend flag="up" style={{marginRight: '16px'}}  >
                    周同比
                    <span >12%</span>
                  </Trend>
                  <Trend flag="down" >
                    日环比
                    <span>11%</span>
                  </Trend>
                </div>
              }
              contentHeight={40}
            >
              <MiniPorgress percent={percent} />
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
