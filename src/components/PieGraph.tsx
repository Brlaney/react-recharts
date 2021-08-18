import React from 'react'
import { colors, data } from '../lib/data/pie'
import {
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'

type PieProps = {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
  index: number
}

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: PieProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.45
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

class PieGraph extends React.Component {
  render() {
    return (
      <PieChart
        width={800}
        height={450}
        margin={{ 
          top: 20, 
          right: 20, 
          left: 190, 
          bottom: 20
        }}
      >
        <Legend
          align='left'
          layout='vertical'
          verticalAlign='middle'
        />
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={160}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>
      </PieChart>
    )
  }
}

export default PieGraph
