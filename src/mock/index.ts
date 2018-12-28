import * as Mock from 'mockjs'
import * as FetchMock from 'fetch-mock'
import User from './User'


// auth
FetchMock.mock(/\/auth\/signin/, User.signin, {
  method: 'post'
})

export default Mock
