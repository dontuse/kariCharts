import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList,
  Legend, ResponsiveContainer, Label, Cell
} from 'recharts';

const data = [
  {
    name: 'Текущий месяц', 'План': 150, "Факт": 50,
  },
  {
    name: 'Прошлый месяц', "Факт": 155
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
        <XAxis type="number" />
        <YAxis  dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="Факт" barSize={40} fill="#413ea0" stackId="a" >
          {/* {
          	data.map((entry, index) => <Cell fill={red}/>)
          } */}
        </Bar>
        <Bar dataKey="План" barSize={40} fill="red" stackId="a" >
          {/* {
          	data.map((entry, index) => <Cell fill={red}/>)
          } */}
        </Bar>

        
      </ComposedChart>
      </ResponsiveContainer>
    );
  }
}