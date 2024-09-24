import React from 'react';
import './Department.css'; // Import the CSS file

function Department() {
  // Event handler for mouse over
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#45a049";
    e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)"; // Add shadow effect
  };

  // Event handler for mouse out
  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "#f44336";
    e.target.style.boxShadow = "none"; // Remove shadow effect
  };

  return (
    <div className="department-container">
      <h2 className="department-title">Department Information</h2>
      <table className="department-table">
        <thead>
          <tr className="table-header">
            <th>Department</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cardiology</td>
            <td>123-456-7890</td>
          </tr>
          <tr>
            <td>Neurology</td>
            <td>098-765-4321</td>
          </tr>
          <tr>
            <td>Orthopedics</td>
            <td>555-555-5555</td>
          </tr>
        </tbody>
      </table>
      <div className="button-container">
      <button
          type="reset"
          className="backButton"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Department;
