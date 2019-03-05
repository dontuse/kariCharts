import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  ComposedChart,
  LabelList
} from 'recharts';

import IndicatorIcon from '../IndicatorIcon';

const data = [
  {
    name: 'Показатель 1',
    val: 90
  },
  {
    name: 'Показатель 2',
    val: 22
  },
  {
    name: 'Показатель 2',
    val: 100
  },
  {
    name: 'Показатель 3',
    val: 55
  },
  {
    name: 'Показатель 4',
    val: -143
  },
  {
    name: 'Показатель 5',
    val: -242
  },
  {
    name: 'Показатель 6',
    val: 80
  }
];

const renderCustomizedLabel = props => {
  const { x, y, width, height, value } = props;
  return (
    <foreignObject x={x - 10} y={y-5} width={30} height={30}  fill="red" >
      <IndicatorIcon mix={'is-small'}></IndicatorIcon>
    </foreignObject>
  );
};

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 25,
            right: 0,
            left: 0,
            bottom: 15
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis hide dataKey="name" type={'category'} />
          <YAxis hide />
          <Tooltip />
          <ReferenceLine y={0} strokeWidth={2} stroke="blue" />
          <Bar barSize={10} dataKey="val" fill="#8884d8">
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
