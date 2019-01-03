import * as numeral from 'numeral'
import Field from './Field'

const yuan = (val:(string|number)) => `¥ ${numeral(val).format('0,0')}`

const Charts = {
  yuan,
  Field
}
export {
  Charts as default,
  yuan,
  Field
}
