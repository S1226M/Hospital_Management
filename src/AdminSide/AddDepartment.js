import React, { useState } from 'react';
import './AdminManagement.css';

const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [departmentId, setDepartmentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend or store in a variable)
    console.log('Department added:', { departmentName, departmentId });

    // Reset form
    setDepartmentName('');
  };

  return (
    <div className="add-department-container">
      <h2>Add Department</h2>
      <form className="add-department-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="departmentName">Department Name</label>
          <input
            type="text"
            id="departmentName"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            placeholder="Enter Department Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departmentId">Department ID</label>
          <input
            type="text"
            id="departmentId"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            placeholder="Enter Department ID"
            required
          />
        </div>
        <button type="submit" className="add-btn">Add Department</button>
      </form>
    </div>
  );
};

export default AddDepartment;
