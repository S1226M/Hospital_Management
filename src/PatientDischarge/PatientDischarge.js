import React from 'react';
import './PatientDischarge.css'; // Import the CSS file

function PatientDischarge() {
  return (
    <div className="dischargeContainer">
      <h2 className="dischargeHeading">Patient Discharge</h2>
      <table className="dischargeTable">
        <tbody>
          {/* Patient ID */}
          <tr>
            <td className="dischargeTableCell">Patient ID</td>
            <td className="dischargeTableCell">
              <input type="number" required className="dischargeInput" placeholder="Enter Patient ID" />
            </td>
          </tr>

          {/* Patient Name */}
          <tr>
            <td className="dischargeTableCell">Patient Name</td>
            <td className="dischargeTableCell">
              <input type="text" required className="dischargeInput" placeholder="Enter Patient Name" />
            </td>
          </tr>

          {/* In Time */}
          <tr>
            <td className="dischargeTableCell">In Time</td>
            <td className="dischargeTableCell">
              <input type="datetime-local" className="dischargeInput" required />
            </td>
          </tr>

          {/* Out Time */}
          <tr>
            <td className="dischargeTableCell">Out Time</td>
            <td className="dischargeTableCell">
              <input type="datetime-local" className="dischargeInput" required />
            </td>
          </tr>

          {/* Buttons Row */}
          <tr>
            <td colSpan="2" className="dischargeButtonRow">
              <button className="dischargeButton dischargeDischargeBtn">Discharge</button>
              <button className="dischargeButton dischargeCheckBtn">Check</button>
              <button className="dischargeButton dischargeBackBtn" type="reset">Back</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PatientDischarge;
