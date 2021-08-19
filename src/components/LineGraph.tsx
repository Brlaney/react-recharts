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
        width={1000}
        height={450}
        data={data}
        margin={{ 
          top: 20, 
          right: 100, 
          left: 30, 
          bottom: 20
        }}
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
