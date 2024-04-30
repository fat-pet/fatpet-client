import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '4/17',
    kg: 35,
    BCS: 8,
  },
  {
    name: '4/25',
    kg: 25,
    BCS: 6,
  },
  {
    name: '5/6',
    kg: 23,
    BCS: 5,
  },
];
export default function Line() {
    {
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 50,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#9F9F9F" />
              <YAxis yAxisId="right" orientation="right" stroke="#9F9F9F" />
              <Tooltip />
              <Legend />
              <Bar barSize={15} yAxisId="left" dataKey="kg" fill="#E8E8E8"  />
              <Bar barSize={15} yAxisId="right" dataKey="BCS" fill="#51A1FF" />
            </BarChart>
          </ResponsiveContainer>
        );
      }
}
