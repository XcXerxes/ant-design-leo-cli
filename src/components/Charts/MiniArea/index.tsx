import * as React from 'react'
import { Chart, Axis, Tooltip, Geom } from 'bizcharts'

type Props = {
  height?: number;
  data: Array<any>;
  forceFit: boolean;
  color?: string;
  borderColor?: string;
  scale?: any;
  borderWidth?: number;
  line?: boolean;
  xAxis?: any;
  YAxis?: any;
  animate?: boolean;
}

class MiniArea extends React.PureComponent<Props> {
  public static defaultProps = {
    data: [],
    forceFit: true,
    color: 'rgba(24, 144, 255, .2)',
    borderColor: '#1089ff',
    scale: {},
    borderWidth: 2,
    animate: true
  }
  public render() {
    const {
      height,
      data,
      forceFit,
      color,
      borderColor,
      scale,
      borderWidth,
      line,
      xAxis,
      YAxis,
      animate
    } = this.props
    const tooltip = [
      'x*y',
      (x:any, y:any) => ({
        name: x,
        value: y
      })
    ]
    return (
      <div>
        <div>
          {height > 0 && (
            <Chart
              animate={animate}
              height={height + 54}
              forceFit={forceFit}
              data={data}
            >

            </Chart>
          )}
        </div>
      </div>
    )
  }
}

export default MiniArea
