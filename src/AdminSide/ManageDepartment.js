import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './ManageDepartment.css'

function ManageDepartment() {
  // State hooks for managing form visibility, department list, and form data
  const [showAddForm, setShowAddForm] = useState(false); // Controls visibility of the add department form
  const [data, setData] = useState([]); // Holds the list of departments
  const [formData, setFormData] = useState({
    departmentName: "", // Holds the input value for department name
    departmentId: "" // Holds the input value for department ID
  });

  // Show the form when "Add Department" button is clicked
  const handleAddDepartmentClick = () => {
    setShowAddForm(true);
    console.log("Add Department button clicked"); // Debug log
    console.log(showAddForm); // Debug log
  };

  // Close the form
  const handleFormClose = () => {
    setShowAddForm(false);
  };

  // Update form data state when form input fields change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Submit the form to add a new department to the server
  const handleDepartmentSubmition = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    const apiUrl = "http://localhost:7000/department"; // API endpoint for adding a new department

    // Send POST request to the server with form data
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        fetchDepartments(); // Fetch updated department list after successful submission
        handleFormClose(); // Close the form
      })
      .catch((error) => console.error("Error adding department:", error)); // Log error if request fails
  };

  // Fetch the department list from the server when the component mounts
  const fetchDepartments = () => {
    fetch('http://localhost:7000/department')
      .then((res) => res.json())
      .then((res) => {
        setData(res); // Update state with the fetched list of departments
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  };

  // Fetch departments once when the component mounts
  useEffect(() => {
    fetchDepartments();
  }, []);

  // Format department data into rows for rendering in the table
  let i = 0;
  const formatDepartment = data.map((department) => (
    <tr key={department.departmentId}>
      <td>{++i}</td>
      <td>{department.departmentName}</td>
      <td>{department.departmentId}</td>
      <td className="view">
        {/* Link to view staff of the department */}
        <Link
          className="btn view-btn m-0 me-0" // Ensure this is correctly applied
        >
          View Staff
        </Link>
      </td>
      <td>
        <button className="btn-danger">Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      {/* Department Information Container */}
      <div
        className={`departmentInformationContainer ${
          showAddForm ? "blurred" : ""
        }`}
      >
        <h2 className="manageDepartmentHeading">Manage Department</h2>
        <button
          className="addDepartmentButton"
          onClick={handleAddDepartmentClick}
        >
          Add Department
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Department Name</th>
              <th>Department ID</th>
              <th style={{ width: "220px" }}>View Staff</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{formatDepartment}</tbody>
        </table>
      </div>
  
      {/* Modal for Add Department Form */}
      {showAddForm && (
        <>
          {/* Modal Overlay */}
          <div className="modal-overlay" onClick={handleFormClose}></div>
  
          {/* Modal Form */}
          <div
            className={`add-department-container ${
              showAddForm ? "visible" : ""
            }`}
          >
            <h2>Add Department</h2>
            <form
              className="add-department-form"
              onSubmit={handleDepartmentSubmition}
            >
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
              <button type="submit" className="add-btn">
                Add Department
              </button>
              <button
                type="button"
                className="close-form-btn"
                onClick={handleFormClose}
              >
                Close
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
  
  
}

export default ManageDepartment;