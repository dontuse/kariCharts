import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList,
  Legend, ResponsiveContainer, Label, Cell, ReferenceLine
} from 'recharts';
import { relative } from 'path';

const data = [
  {
    name: 'Текущий месяц', 'факт': 1220, "не выполнено":5280, план: 1233,
  },
  {
    name: 'Предыдущий месяц', 'факт': 4233, план: 3242, "не выполнено": null, r: 2111
  },

];

const renderCustomizedLabel = props => {
  const { x, y, width, height, value } = props;
  console.log('""""', props)
  if(!value) {
    return null;
  }
  return (
    <foreignObject style={{zIndex: 1121, position: 'relative'}} x={x + width - 3} y={y - 15} width={100} height={50}  fill="red" >
      <div style={{borderLeft: '3px solid #FB362F', height: '100%', zIndex: 12221, position: 'relative'}}>
      <span style={{top: 0, left: 5, position: 'absolute', fontSize: 11}}>{value}</span>
      <span style={{bottom: 0, left: 5, position: 'absolute', fontSize: 11}}>50 %</span>
      </div>
    </foreignObject>
  );
};

export default class Chart3 extends PureComponent {

  render() {
    return (
      <ResponsiveContainer>
      <ComposedChart
        layout='vertical'
        data={data}
        margin={{
          top: 20, right: 0, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis hide type="number" />
        <YAxis tick={{fontSize: 11, fill: '#3056FB'}} orientation='left'  dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
       

        <Bar stackId="a" layout="vertical" dataKey="r"  barSize={20} fill="#413ea0"  >
         <LabelList dataKey="r" content={renderCustomizedLabel} />
        </Bar>


        <Bar stackId="a" layout="vertical" dataKey="факт" barSize={20} fill="#413ea0" >
          <LabelList position="insideTopRight" dataKey="факт" content={renderCustomizedLabel}  />
        </Bar>

        <Bar stackId="a" layout="vertical" dataKey="не выполнено"  barSize={20} fill="gray"  >
          <LabelList dataKey="не выполнено" content={renderCustomizedLabel} />
        </Bar>


        


        {/* <ReferenceLine  x="1244"  stroke="red" label="1244" /> */}
        


        
      </ComposedChart>
      </ResponsiveContainer>
    );
  }
}