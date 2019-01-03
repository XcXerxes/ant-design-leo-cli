import dayjs from 'dayjs'
const visitData:any = []
const beginDay = new Date().getTime()
const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]

for (let i = 0; i < fakeY.length; i++) {
  visitData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i]
  })
}

export default {
  fakeChartData() {
    return {
      visitData
    }
  }
}
