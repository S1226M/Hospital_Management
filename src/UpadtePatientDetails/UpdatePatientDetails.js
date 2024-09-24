import React from 'react';
import './UpdatePatientDetails.css'; // Import the CSS file

function UpdatePatientDetails() {
  return (
    <div className="updatePatientContainer">
      <h2 className="updatePatientHeading">Update Patient Details</h2>
      <table className="updatePatientTable">
        <tbody>
          {/* Patient ID */}
          <tr>
            <td className="tableCell">Patient ID</td>
            <td className="tableCell">
              <input
                type="number"
                required
                className="inputField"
                placeholder="Enter Patient ID"
              />
            </td>
          </tr>

          {/* Patient Name */}
          <tr>
            <td className="tableCell">Patient Name</td>
            <td className="tableCell">
              <input
                type="text"
                required
                className="inputField"
                placeholder="Enter Patient Name"
              />
            </td>
          </tr>

          {/* Patient Disease & Symptoms */}
          <tr>
            <td className="tableCell">Patient Disease & Symptoms</td>
            <td className="tableCell">
              <input
                type="text"
                required
                className="inputField"
                placeholder="Enter Disease & Symptoms"
              />
            </td>
          </tr>

          {/* Room Allocation */}
          <tr>
            <td className="tableCell">Allocated Room</td>
            <td className="tableCell">
              <select className="selectField" required>
                <option value="">Select Room</option>
                <option value="101">101</option>
                <option value="102">102</option>
                <option value="103">103</option>
              </select>
            </td>
          </tr>

          {/* Department */}
          <tr>
            <td className="tableCell">Department</td>
            <td className="tableCell">
              <select className="selectField" required>
                <option value="">Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedics">Orthopedics</option>
              </select>
            </td>
          </tr>

          {/* Buttons Row */}
          <tr>
            <td colSpan="2" className="buttonContainer">
              <button className="updateButton">Update</button>
              <button className="checkButton">Check</button>
              <button type="reset" className="backButton">Back</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UpdatePatientDetails;
