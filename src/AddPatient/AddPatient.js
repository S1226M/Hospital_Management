import React from "react";
import "./AddPatient.css"; // Import the external CSS file

function AddPatient() {
  return (
    <form className="add-patient-form">
      <h2 className="form-title">Add Patient Information</h2>
      <table className="form-table">
        <tbody>
          <tr>
            <td className="form-table-cell">ID Type</td>
            <td className="form-table-cell">
              <select className="input-field">
                <option>Adhar Card</option>
                <option>Driving License</option>
                <option>Passport</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Number</td>
            <td className="form-table-cell">
              <input type="number" required className="input-field" />
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Full Name</td>
            <td className="form-table-cell">
              <input type="text" required className="input-field" />
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Gender</td>
            <td className="form-table-cell">
              <div className="gender-options">
                <label>
                  <input type="radio" name="Gender" value="male" /> Male
                </label>
                <label>
                  <input type="radio" name="Gender" value="female" /> Female
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Patient Disease & Symptoms</td>
            <td className="form-table-cell">
              <input type="text" required className="input-field" />
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Allocated Room Number</td>
            <td className="form-table-cell">
              <select className="input-field">
                <option>101</option>
                <option>102</option>
                <option>103</option>
                <option>104</option>
                <option>105</option>
                <option>201</option>
                <option>202</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Deposit</td>
            <td className="form-table-cell">
              <input type="number" required className="input-field" />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="form-buttons">
              <button className="add-patient-button add-patient-submit-btn">Submit</button>
              <button type="reset" className="add-patient-button add-patient-reset-btn">Reset</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default AddPatient;