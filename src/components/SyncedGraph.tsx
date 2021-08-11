import React from 'react';
import '../scss/styles.scss';
import { data } from '../lib/data/synced';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area
} from 'recharts';


export default function SyncedGraph() {
  return (
    <div className='container'>

      <h4>A demo of synchronized AreaCharts</h4>
      <LineChart
        width={500}
        height={200}
        className='line'
        data={data}
        syncId='anyId'
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid className='grid' strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
      </LineChart>

      <p>Maybe some other content</p>
      <LineChart
        width={500}
        height={200}
        className='line'
        data={data}
        syncId='anyId'
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
        <Brush />
      </LineChart>
      <AreaChart
        width={500}
        height={200}
        data={data}
        syncId='anyId'
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
      </AreaChart>
    </div>
  );
}
