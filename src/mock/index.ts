import * as Mock from 'mockjs'
import * as FetchMock from 'fetch-mock'
import User from './User'
import Charts from './charts'


// auth
FetchMock.mock(/\/auth\/signin/, User.signin, {
  method: 'post'
})

// charts
FetchMock.mock(/\/dashboard\/fake_chart_data/, Charts.fakeChartData, {
  method: 'get'
})

export default Mock
