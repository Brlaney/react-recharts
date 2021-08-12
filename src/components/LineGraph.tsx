import { data } from '../lib/data/line';
import React from 'react';
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';


class LineGraph extends React.Component {
  render() {
    return (
      <LineChart
        id='line'
        width={800}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 20
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='Product A' stroke='#485696' />
        <Line type='monotone' dataKey='Procuct B' stroke='#A8293E' />
      </LineChart>
    )
  };
}

export default LineGraph;
