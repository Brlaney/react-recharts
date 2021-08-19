import React from 'react'
import { data } from '../lib/data/line'
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'


class LineGraph extends React.Component {
  render() {
    return (
      <LineChart
        id='line'
        width={1350}
        height={500}
        data={data}
        margin={{ top: 40, right: 110, left: 100, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray='6 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend
          align='left'
          layout='vertical'
          verticalAlign='middle'
        />
        <Line
          type='monotone'
          dataKey='Total'
          stroke='#485696'
          activeDot={{
            stroke: '#272d2dff',
            strokeWidth: 1,
            r: 6
          }}
        />
        <Line
          type='monotone'
          dataKey='Heroin'
          stroke='#A8293E'
          activeDot={{
            stroke: '#272d2dff',
            strokeWidth: 1,
            r: 6
          }}
        />
        <Line
          type='monotone'
          dataKey='Natural-synth'
          stroke='#12ba41'
          activeDot={{
            stroke: '#272d2dff',
            strokeWidth: 1,
            r: 6
          }}
        />
        <Line
          type='monotone'
          dataKey='Methadone'
          stroke='#0b857f'
          activeDot={{
            stroke: '#272d2dff',
            strokeWidth: 1,
            r: 6
          }}
        />
        <Line
          type='monotone'
          dataKey='Other'
          stroke='#D3199B'
          activeDot={{
            stroke: '#272d2dff',
            strokeWidth: 1,
            r: 6
          }}
        />
      </LineChart>
    )
  }
}

export default LineGraph
