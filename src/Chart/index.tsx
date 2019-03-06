import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart, Legend,
} from 'recharts';

const data = [
  {
    name: '10', 'факт': 2000, прогноз: 2425, план: 2400,  
  },
  {
    name: '12', 'факт': 1300, прогноз: 2400, план: 2400, 
  },
  {
    name: '14', факт: 3000, прогноз: 1398, план: 3210,
  },
  {
    name: '16', факт: 2000, прогноз: 2200, план: 2290,
  },
  {
    name: '18', факт: 2780, прогноз: 3908, план: 2000,
  },
  {
    name: '20', факт: 1890, прогноз: 3800, план: 2181,
  },
  {
    name: '22', факт: 2390, прогноз: 3800, план: 2500,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
        <ResponsiveContainer>
          <ComposedChart
            data={data}
          >
            <CartesianGrid strokeDasharray="1 1 " />
            <XAxis dataKey="name" />
            <YAxis hide />
            
            <Tooltip />
            <Area dot={{  strokeWidth: 2 }} type="linear" dataKey="факт" stroke="#3056FB" fill="#2BF8FE" />

            <Line type="linear" dataKey="план" stroke="#AA0D0F" />
            <Line type="linear" dataKey="прогноз" stroke="black" strokeDasharray="2 2" />
            <Legend></Legend>
          </ComposedChart>
        </ResponsiveContainer>
    );
  }
}

