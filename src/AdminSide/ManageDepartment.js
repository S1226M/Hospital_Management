import React, { useEffect, useState } from "react";
import './AdminManagement.css';

function ManageDepartment() {
  const [showAddForm, setShowAddForm] = useState(false);
  
  // State for holding the list of departments
  const [data, setData] = useState([]);

  // State for holding form input values
  const [formData, setFormData] = useState({
    departmentName: "",
    departmentId: ""
  });

  // Show add department form
  const handleAddDepartmentClick = () => {
    setShowAddForm(true);
  };

  // Close the add department form
  const handleFormClose = () => {
    setShowAddForm(false);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle department submission
  const handleDepartmentSubmition = (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:7000/department";

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        // Fetch updated list of departments after adding a new one
        fetchDepartments();
        handleFormClose(); // Close the form after successful submission
      })
      .catch((error) => console.error("Error adding department:", error));
  };

  // Fetch departments from the server
  const fetchDepartments = () => {
    fetch('http://localhost:7000/department')
      .then((res) => res.json())
      .then((res) => {
        setData(res); // Update data with the array of departments
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Fetch departments when the component mounts
  useEffect(() => {
    fetchDepartments();
  }, []);

  let i = 0;
  // Format the department data for rendering
  const formatDepartment = data.map((department) => (
    <tr key={department.departmentId}>
      <td>{++i}</td>
      <td>{department.departmentName}</td>
      <td>{department.departmentId}</td>
      <td>
        <button className="btn btn-info">View Staff</button>
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className={`departmentInformationContainer ${showAddForm ? "blurred" : ""}`}>
        <h2 className="manageDepartmentHeading">Manage Department</h2>
        <button className="addDepartmentButton" onClick={handleAddDepartmentClick}>Add Department</button>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Department Name</th>
              <th>Department ID</th>
              <th>ViewStaff</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{formatDepartment}</tbody>
        </table>
      </div>

      {showAddForm && (
        <div className={`add-department-container ${showAddForm ? "visible" : ""}`}>
          <h2>Add Department</h2>
          <form className="add-department-form" onSubmit={handleDepartmentSubmition}>
            <div className="form-group">
              <label htmlFor="departmentName">Department Name</label>
              <input
                type="text"
                id="departmentName"
                placeholder="Enter Department Name"
                value={formData.departmentName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="departmentId">Department ID</label>
              <input
                type="text"
                id="departmentId"
                placeholder="Enter Department ID"
                value={formData.departmentId}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="add-btn">Add Department</button>
            <button type="button" className="close-form-btn" onClick={handleFormClose}>Close</button>
          </form>
        </div>
      )}
    </>
  );
}

export default ManageDepartment;