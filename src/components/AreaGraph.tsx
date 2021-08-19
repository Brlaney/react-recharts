import React from 'react';
import { data } from '../lib/data/area';
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';


class AreaGraph extends React.Component {
  render() {
    return (
      <div id='areaChart'>

        {/* Area chart 1: No. of cases in TN */}
        <h2 id='titleOne'>
          Number of cases in Tennessee
        </h2>
        <ResponsiveContainer width='100%' height={200}>
          <AreaChart
            id='area'
            width={1350}
            height={450}
            data={data}
            syncId='areaId'
            margin={{ top: 20, right: 100, left: 100, bottom: 20 }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#A8293E' stopOpacity={0.85} />
                <stop offset='95%' stopColor='#A8293E' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='label' />
            <YAxis />
            <CartesianGrid strokeDasharray='6 3' />
            <Tooltip />
            <Area type='monotone'
              dataKey='No. cases'
              stroke='#A8293E'
              fillOpacity={1}
              fill='url(#colorUv)'
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Area chart 2: No. of fatalities in TN */}
        <h2 id='titleTwo'>
          Fatalities due to COVID-19 in Tennessee
        </h2>
        <ResponsiveContainer width='100%' height={200}>
          <AreaChart
            id='area'
            width={1000}
            height={450}
            data={data}
            syncId='areaId'
            margin={{
              top: 20,
              right: 100,
              left: 100,
              bottom: 20
            }}
          >
            <defs>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#485696' stopOpacity={0.88} />
                <stop offset='95%' stopColor='#485696' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='label' />
            <YAxis />
            <CartesianGrid strokeDasharray='6 3' />
            <Tooltip />
            <Area type='monotone'
              dataKey='Deaths'
              stroke='#485696'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  };
}

export default AreaGraph;
