import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

interface ActivityChartProps {
  data: any[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {data.length > 0 &&
          Object.keys(data[0].items.children).map((_, index) => (
            <Bar key={index} dataKey={`items.children[${index}].count`} fill={data[0].items.children[index].fillColor} name={data[0].items.children[index].label} />
          ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
