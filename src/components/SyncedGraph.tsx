import React from 'react'
import '../scss/styles.scss'
import { data } from '../lib/data/synced'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area
} from 'recharts'


export default function SyncedGraph() {
  return (
    <div className='container'>

      {/* Graph 1 (top-row) */}
      <LineChart
        width={500}
        height={450}
        className='line'
        data={data}
        syncId='anyId'
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid className='grid' strokeDasharray='3 3' />
        <XAxis className='xAxis' dataKey='id' />
        <YAxis className='yAxis' />
        <Tooltip />
        <Line type='monotone' dataKey='uv' stroke='#A8293E' fill='#454655' />
      </LineChart>

      {/* Graph 2 (middle-row) */}
      <LineChart
        width={500}
        height={200}
        className='line'
        data={data}
        syncId='anyId'
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid className='grid' strokeDasharray='3 3' />
        <XAxis className='xAxis' dataKey='id' />
        <YAxis className='yAxis' />
        <Tooltip />
        <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#714797' />
      </LineChart>

      {/* Graph 3 (bottom-row) */}
      <AreaChart
        width={500}
        height={200}
        data={data}
        syncId='anyId'
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid className='grid' strokeDasharray='3 3' />
        <XAxis className='xAxis' dataKey='id' />
        <YAxis className='yAxis' />
        <Tooltip />
        <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#D0A616' />
      </AreaChart>
    </div>
  )
}
