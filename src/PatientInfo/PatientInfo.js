import React from 'react';
import './PatientInfo.css'; // Import the CSS file

function PatientInfo() {
  return (
    <div className="patientInfoContainer">
      <h2 className="patientInfoHeading">Patient Information</h2>
      <table className="patientInfoTable">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Number</th>
            <th>Gender</th>
            <th>Disease & Symptoms</th>
            <th>Room</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>9876543210</td>
            <td>Male</td>
            <td>Flu, Fever</td>
            <td>101</td>
            <td>General</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>1234567890</td>
            <td>Female</td>
            <td>Fracture</td>
            <td>102</td>
            <td>Orthopedics</td>
          </tr>
        </tbody>
      </table>

      <div className="buttonContainer">
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

export default PatientInfo;
