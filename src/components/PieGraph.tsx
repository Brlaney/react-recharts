// src/components/PieGraph.tsx

import React from 'react';
import { colors, data } from '../lib/data/pie'
import { PieChart, Pie, Cell, Legend } from 'recharts';


class PieGraph extends React.Component {
  render() {
    return (
      <PieChart
        id='pie'
        width={730}
        height={300}
        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
      >
        <Pie
          data={data}
          color='#000000'
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          outerRadius={120}
          fill='#8884d8'
        >
          {
            data.map((entry, index) =>
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            )
          }
        </Pie>
        <Legend />
      </PieChart>
    )
  };
}

export default PieGraph;