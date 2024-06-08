import React from 'react';

interface FilterControlsProps {
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

const FilterControls: React.FC<FilterControlsProps> = ({ filters, setFilters }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filters">
      <label>
        Activity Type:
        <select name="activityType" onChange={handleChange}>
          <option value="">All</option>
          <option value="PR Open">PR Open</option>
          <option value="PR Merged">PR Merged</option>
          <option value="Commits">Commits</option>
          <option value="PR Reviewed">PR Reviewed</option>
          <option value="PR Comments">PR Comments</option>
          <option value="Incident Alerts">Incident Alerts</option>
          <option value="Incidents Resolved">Incidents Resolved</option>
        </select>
      </label>
    </div>
  );
};

export default FilterControls;
