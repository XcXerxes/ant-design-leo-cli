import { users } from './user'
import { fakeCharts } from './charts'
import { combineReducers } from 'redux'

export default combineReducers({
  users,
  fakeCharts
})
