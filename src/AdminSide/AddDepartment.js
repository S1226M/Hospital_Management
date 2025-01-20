// Import necessary modules and styles
import React, { useState } from 'react'; // Import React and useState for state management
import './AddDepartment.css'; // Import the CSS file for styling

// AddDepartment Function Component for adding a new department
const AddDepartment = () => {
  
  // State variables for managing department details and modal visibility
  const [departmentName, setDepartmentName] = useState(''); // Holds the name of the department
  const [departmentId, setDepartmentId] = useState(''); // Holds the unique ID of the department
  const [showModal, setShowModal] = useState(false); // Controls the visibility of the modal (true = show, false = hide)

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if the inputs are empty
    if (departmentName.trim() === '' || departmentId.trim() === '') {
      alert('Please fill in all fields.'); // Alert the user if fields are empty
      return; // Stop further execution
    }

    // Log the new department data (Replace this with API call logic in a real app)
    console.log('Department added:', { departmentName, departmentId });

    // Reset the form fields and close the modal
    setDepartmentName(''); // Clear the department name field
    setDepartmentId(''); // Clear the department ID field
    setShowModal(false); // Close the modal 
  };

  return (
    <>
      {/* Button to open the modal */}
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        Add Department
      </button>

      {/* Modal for adding department */}
      {showModal && (
        <div
          className="add-department-container visible" // Modal container
          role="dialog" // Accessibility role
          aria-labelledby="add-department-title" // Links modal to the title
        >
          {/* Modal title */}
          <h2 id="add-department-title">Add Department</h2>

          {/* Form for adding a new department */}
          <form className="add-department-form" onSubmit={handleSubmit}>
            {/* Input field for department name */}
            <div className="form-group">
              <label htmlFor="departmentName">Department Name</label> {/* Label */}
              <input
                type="text"
                id="departmentName" // Unique ID for accessibility
                value={departmentName} // Binds input value to state
                onChange={(e) => setDepartmentName(e.target.value)} // Updates state on change
                placeholder="Enter Department Name" // Placeholder text
                aria-label="Department Name" // Accessibility label
                required // Makes the field mandatory
              />
            </div>

            {/* Input field for department ID */}
            <div className="form-group">
              <label htmlFor="departmentId">Department ID</label> {/* Label */}
              <input
                type="text"
                id="departmentId" // Unique ID for accessibility
                value={departmentId} // Binds input value to state
                onChange={(e) => setDepartmentId(e.target.value)} // Updates state on change
                placeholder="Enter Department ID" // Placeholder text
                aria-label="Department ID" // Accessibility label
                required // Makes the field mandatory
              />
            </div>

            {/* Buttons for form actions */}
            <div className="button-group">
              {/* Submit button */}
              <button type="submit" className="add-btn">
                Add Department
              </button>
              {/* Cancel button */}
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowModal(false)} // Closes the modal on click
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddDepartment; // Export the component for use in other parts of the app