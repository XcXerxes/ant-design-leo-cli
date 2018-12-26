import * as Mock from 'mockjs'
import User from './User'


// auth
Mock.mock(/\/auth\/signin/, 'post', User.signin)

export default Mock
