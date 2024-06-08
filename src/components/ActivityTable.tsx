import React from 'react';

interface ActivityTableProps {
  data: any[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          {data[0]?.items?.children.map((activity: any, index: number) => (
            <th key={index}>{activity.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((day: any, index: number) => (
          <tr key={index}>
            <td>{day.date}</td>
            {day.items.children.map((activity: any, subIndex: number) => (
              <td key={subIndex}>{activity.count}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActivityTable;
