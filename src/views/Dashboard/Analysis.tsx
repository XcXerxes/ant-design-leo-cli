import * as React from 'react'
import * as numeral from 'numeral'
import * as styles from './Analysis.scss'
import {
  Row,
  Col,
  Tooltip,
  Icon,
  Card,
  Tabs,
  DatePicker
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
import { getTimeDistance } from '../../utils'

const { Fragment } = React
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const Yuan = (props:any) => (
  <span dangerouslySetInnerHTML={{ __html: yuan(props.children)}} />
)

type State = {
  loading1: boolean;
  percent: number;
  rangePickerValue?:any;
}
type Props = {
  loading?: boolean;
  fakeChart: () => any;
  charts?: any;
}


class Analysis extends React.PureComponent<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = {
      loading1: false,
    percent: 0,
    rangePickerValue: getTimeDistance('year')
    }
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
  public isActive = (type:string):any => {
    const { rangePickerValue } = this.state
    const value:any = getTimeDistance(type)
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return
    }
    if (rangePickerValue[0].isSame(value[0], 'day') &&
    rangePickerValue[1].isSame(value[1], 'day')) {
      return styles.currentDate
    }
  }
  public selecteDate = (type:string) => {
    const value:any = getTimeDistance(type)
    const { rangePickerValue } = this.state
    if (!rangePickerValue[0].isSame(value[0], 'day') ||
    !rangePickerValue[1].isSame(value[1], 'day')) {
      this.setState({
        rangePickerValue: value
      }) 
    }
  }
  public render() {
    const { percent, rangePickerValue } = this.state
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: {marginBottom: 24}
    }

    const salesExtraBarResponsProps = {

    }
    const salesExtraRankResponsProps = {
      
    }
    const { loading, charts } = this.props
    const {
      visitData
    } = charts

    const salesExtra:any = (
      <div className={styles.salesExtraWrap}>
        <div className={styles.salesExtra}>
          <a href="#" className={this.isActive('today')} onClick={() => this.selecteDate('today')} >今日</a>
          <a href="#" className={this.isActive('week')} onClick={() => this.selecteDate('week')} >本周</a>
          <a href="#" className={this.isActive('month')} onClick={() => this.selecteDate('month')} >本月</a>
          <a href="#" className={this.isActive('year')} onClick={() => this.selecteDate('year')} >全年</a>
        </div>
        <RangePicker 
          value={rangePickerValue}
          style={{ width: 256 }}
        />
      </div>
    )
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
        <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }} >
          <Tabs tabBarExtraContent={salesExtra} size="large" className={styles.salesTabs}>
            <TabPane tab="销售额" key="1">
              1234
            </TabPane>
            <TabPane tab="访问量" key="2">
              1234566
            </TabPane>
          </Tabs>
        </Card>
      </Fragment>
    )
  }
}

export default connect(((state:any) => ({
  charts: state.fakeCharts.charts,
  loading: state.fakeCharts.loading
})), { fakeChart })(Analysis)
