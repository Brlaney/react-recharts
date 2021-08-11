import React from 'react';
import '../scss/styles.scss';
import { data } from '../lib/data/synced';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush, AreaChart, Area } from 'recharts';


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
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid className='grid' strokeDasharray='3 3' />
        <XAxis className='xAxis' dataKey='name' color='inherit' />
        <YAxis className='yAxis' color='inherit' />
        <Tooltip />
        <Line type='monotone' dataKey='uv' stroke='#A8293E' fill='#454655' />
      </LineChart>

      <p>Maybe some other content</p>
      <LineChart
        width={500}
        height={200}
        className='line'
        data={data}
        syncId='anyId'
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid className='grid' strokeDasharray='3 3' />
        <XAxis className='xAxis' color='inherit' dataKey='id' />
        <YAxis className='yAxis' color='inherit' />
        <Tooltip />
        <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#714797' />
        <Brush />
      </LineChart>

      <AreaChart
        width={500}
        height={200}
        data={data}
        syncId='anyId'
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid className='grid' strokeDasharray='3 3' />
        <XAxis className='xAxis' color='inherit' dataKey='name' />
        <YAxis className='yAxis' color='inherit' />
        <Tooltip />
        <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#D0A616' />
      </AreaChart>
    </div>
  );
}
