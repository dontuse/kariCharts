import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList,
  Legend, ResponsiveContainer, Label
} from 'recharts';

const data = [
  {
    name: 'Текущий месяц', uv: 6550, pv: 2050,
  },
  {
    name: 'Прошлый месяц', uv: 3000, pv: 2500
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

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
        <XAxis hide type="number" />
        <YAxis hide  dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="pv" barSize={40} fill="#413ea0" stackId="a" >
         <LabelList dataKey="name" position="top" />
        </Bar>
        <Bar dataKey="uv" barSize={40} fill="gray" stackId="a" >
         {/* <LabelList dataKey="name" position="top" /> */}
        </Bar>
        
      </ComposedChart>
      </ResponsiveContainer>
    );
  }
}