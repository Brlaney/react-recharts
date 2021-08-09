// src/components/LineGraph.tsx

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
  data = [
    { 'name': 'Jan 2019', 'Product A': 3432, 'Procuct B': 2342 },
    { 'name': 'Feb 2019', 'Product A': 2342, 'Procuct B': 3246 },
    { 'name': 'Mar 2019', 'Product A': 4565, 'Procuct B': 4556 },
    { 'name': 'Apr 2019', 'Product A': 6654, 'Procuct B': 4465 },
    { 'name': 'May 2019', 'Product A': 8765, 'Procuct B': 4553 }
  ]

  render() {
    return (
      <LineChart
        id='line'
        width={800}
        height={350}
        data={this.data}
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
        <Line type='monotone' dataKey='Product A' stroke='#0095FF' />
        <Line type='monotone' dataKey='Procuct B' stroke='#FF0000' />
      </LineChart>
    )
  };
}

export default LineGraph;
