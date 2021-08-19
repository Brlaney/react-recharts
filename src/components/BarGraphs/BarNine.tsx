import React from 'react'
import { datasetNine as data } from '../../lib/data/abortion-condensed'
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export const title = {
  t1: 'uknown gestational age',
  t2: 'Total abortions reported by known method type',
  total: 556294,
  percent: 98.5
};

class BarOne extends React.Component {
  render() {
    return (
      <div id='barChart'>
        <h2 id='title'>Age: {title.t1}. Procedure type: {title.t2}</h2>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={1200}
            height={450}
            data={data}
            margin={{ top: 20, right: 100, left: 30, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray='6 3' />
            <XAxis dataKey='State' />
            <YAxis />
            <Tooltip />
            <ReferenceLine y={0} stroke='#000' />
            <Bar dataKey='Number' fill='#5F5AA2' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default BarOne
