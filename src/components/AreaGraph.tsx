import React from 'react';
import { data } from '../lib/data/area';
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';


class AreaGraph extends React.Component {
  render() {
    return (
      <AreaChart
        id='area'
        width={1000}
        height={400}
        data={data}
        margin={{ top: 20, right: 100, left: 100, bottom: 20 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#A8293E' stopOpacity={0.85} />
            <stop offset='95%' stopColor='#A8293E' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#485696' stopOpacity={0.88} />
            <stop offset='95%' stopColor='#485696' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='date' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend id='legend' />
        <Area type='monotone' dataKey='No. cases' stroke='#A8293E' fillOpacity={1} fill='url(#colorUv)' />
        <Area type='monotone' dataKey='Deaths' stroke='#485696' fillOpacity={1} fill='url(#colorPv)' />
      </AreaChart>
    )
  };
}

export default AreaGraph;
