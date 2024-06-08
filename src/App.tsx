import React, { useEffect, useState } from 'react';
import { fetchActivityData } from './services/api';
import ActivityChart from './components/ActivityCharts';
import ActivityTable from './components/ActivityTable';
import FilterControls from './components/FilterControls';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [filters, setFilters] = useState<any>({ activityType: '' });

  useEffect(() => {
    const getData = async () => {
      const result = await fetchActivityData();
      setData(result);
    };

    getData();
  }, []);

  const filteredData = filters.activityType
    ? data.map((day) => ({
        ...day,
        items: {
          ...day.items,
          children: day.items.children.filter((item: any) => item.label === filters.activityType),
        },
      }))
    : data;

  return (
    <div className="App">
      <h1>Developer Activity Dashboard</h1>
      <FilterControls filters={filters} setFilters={setFilters} />
      <ActivityChart data={filteredData} />
      <ActivityTable data={filteredData} />
    </div>
  );
};

export default App;
