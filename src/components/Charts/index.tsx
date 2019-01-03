import * as numeral from 'numeral'
import Field from './Field'
import MiniArea from './MiniArea'
import MiniBar from './MiniBar'
import MiniPorgress from './MiniProgress'

const yuan = (val:(string|number)) => `¥ ${numeral(val).format('0,0')}`

const Charts = {
  yuan,
  Field,
  MiniArea,
  MiniBar,
  MiniPorgress
}
export {
  Charts as default,
  yuan,
  Field,
  MiniArea,
  MiniBar,
  MiniPorgress
}
