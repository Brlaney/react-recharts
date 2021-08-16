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
        width={1000}
        height={400}
        data={data}
        margin={{ top: 20, right: 100, left: 30, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend id='legend' />
        <Line type='monotone' dataKey='Total' stroke='#485696' />
        <Line type='monotone' dataKey='Heroin' stroke='#A8293E' />
        <Line type='monotone' dataKey='Natural-synth' stroke='#12ba41' />
        <Line type='monotone' dataKey='Methadone' stroke='#54cec8' />
        <Line type='monotone' dataKey='Other' stroke='#D3199B' />
      </LineChart>
    )
  };
}

export default LineGraph;
