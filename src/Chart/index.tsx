import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart,
} from 'recharts';

const data = [
  {
    name: '10', uv: 4000, pv: 2400, amt: 2400,  q: 3333, r : 1222,
  },
  {
    name: '12', uv: 4000, pv: 2400, amt: 2400,  q: 333, r : 6222,
  },
  {
    name: '14', uv: 3000, pv: 1398, amt: 2210,  q: 4333, r : 2222,
  },
  {
    name: '16', uv: 2000, pv: 9800, amt: 2290,  q: 1333, r : 2222,
  },
  {
    name: '18', uv: 2780, pv: 3908, amt: 2000,  q: 2333, r : 2222,
  },
  {
    name: '20', uv: 1890, pv: 4800, amt: 2181, q: 1333, r : 2222,
  },
  {
    name: '22', uv: 2390, pv: 3800, amt: 2500, q: 4333, r : 2222,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7j5bbbum/';

  render() {
    return (
        <ResponsiveContainer>
          <ComposedChart
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />

            <Line type="monotone" dataKey="q" stroke="red" />
            <Line type="monotone" dataKey="r" stroke="black" strokeDasharray="5 5" />
          </ComposedChart>
        </ResponsiveContainer>
    );
  }
}

