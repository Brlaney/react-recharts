import React from 'react'
import { datasetOne as data } from '../lib/data/abortion-condensed'
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export const title = {
  t1: '<= 13 weeks gestation',
  t2: 'Surgical',
  total: 289931,
  percent: 52.1
};

class BarGraph extends React.Component {
  render() {
    return (
      <div id='barChart'>
        <h2 id='title'>Age: {title.t1}. Procedure type: {title.t2}</h2>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={1000}
            height={450}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='6 3' />
            <XAxis dataKey='State' />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
            <ReferenceLine y={0} stroke='#000' />
            <Bar dataKey='Number' fill='#5F5AA2' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default BarGraph
