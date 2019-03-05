import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart,
} from 'recharts';

const data = [
  {
    name: '5', uv: 4000, pv: 2400, amt: 2400,  q: 3333, r : 1222, day: 'вт'
  },
  {
    name: '6', uv: 4000, pv: 2400, amt: 2400,  q: 333, r : 6222, day: 'ср'
  },
  {
    name: '7', uv: 8000, pv: 5398, amt: 2210,  q: 1333, r : 5222, day: 'чт'
  },
  {
    name: '8', uv: 2000, pv: 9800, amt: 2290,  q: 333, r : 2222, day: 'пт'
  },
  {
    name: '9', uv: 2780, pv: 3908, amt: 2000,  q: 2333, r : 2222, day: 'сб'
  },
  {
    name: '10', uv: 1890, pv: 4800, amt: 2181, q: 1333, r : 2222, day: 'вс'
  },
  {
    name: '11', uv: 2390, pv: 3800, amt: 2500, q: 4333, r : 2222, day: 'пн'
  },
];


const customizedTick = (props) => {
  console.log('props', props)
	const { payload, x, y, index, } = props;
  const cos = Math.cos(-payload.angle * Math.PI / 180);
  const item = data[index]; 
  
  return (
    <foreignObject x={x - 12} y={y-5} width={24} height={44}  fill="red" >
    <div style={{background: 'red', color: 'white', fontSize: 11, padding: 4}}>
      <div style={{marginBottom: 5}}>{payload.value}</div>
      <div>{data.find(v => v.name === payload.value).day}</div>
    </div>
    </foreignObject>
  );
}

export default class Example extends PureComponent {
  

  render() {
    return (
        <ResponsiveContainer>
          <ComposedChart
            data={data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis tick={customizedTick}  dataKey="name" />
            
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />

            <Line type="monotone" dataKey="q" stroke="red" />
          </ComposedChart>
        </ResponsiveContainer>
    );
  }
}