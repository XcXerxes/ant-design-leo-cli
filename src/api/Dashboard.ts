import Request from './Request'

export function fakeChartData () {
  return Request('/dashboard/fake_chart_data', {
    method: 'get'
  })
}
export function fetchMonitorData () {
  return Request('/dashboard/monitor/tags', {
    method: 'get'
  })
}
