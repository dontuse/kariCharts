import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList,
  Legend, ResponsiveContainer, Label, Cell
} from 'recharts';

const data = [
  {
    name: 'Текущий месяц', 'факт': 1220, "не выполнено": 3280,
  },
  {
    name: 'Предыдущий месяц', 'факт': 4233,
  },

];

export default class Chart3 extends PureComponent {

  render() {
    return (
      <ResponsiveContainer>
      <ComposedChart
        layout="vertical"
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis  dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar layout="vertical" dataKey="факт" barSize={40} fill="#413ea0" stackId="a">
          {/* {console.log('data--------', data)}     */}
        </Bar>
        <Bar dataKey="не выполнено" stackId="a" barSize={40} fill="gray"  >
        </Bar>


        
      </ComposedChart>
      </ResponsiveContainer>
    );
  }
}