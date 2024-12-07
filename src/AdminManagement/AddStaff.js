import React from "react";

function AddStaff(){
    return(
        <form className="add-staff-form">
            <h2 className="add-staff-form-title">Add staff Information</h2>
            <table>
                <tbody>
                    <tr>
                        <td className="add-staff-form-cell">ID</td>
                        <td className="add-staff-form-cell">
                            <select
                             className="input-field"
                            >
                                <option>Adhar Card</option>
                                <option>Driving License</option>
                                <option>Passport</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="add-staff-form-cell">Full Name</td>
                        <td className="add-staff-form-cell">
                          <input
                            className="input-field"
                            type="text"
                            required
                          />
                        </td>
                    </tr>
                    <tr>
                        <td className="add-staff-form-cell">Phone Number</td>
                        <td className="add-staff-form-cell">
                          <input
                            className="input-field"
                            type="text"
                            required
                          />
                        </td>
                    </tr>
                    <tr>
                        <td className="add-staff-form-cell">Gender</td>
                        <td className="add-staff-form-cell">
                          <div className="gender-options">
                            <label>
                              <input
                                type="radio"
                                name="Gender"
                                value="male"
                              />
                              Male
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="Gender"
                                value="female"
                              />
                              Female
                            </label>
                          </div>
                        </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="street">Street Address:</label></td>
                      <td><input type="text" id="street" name="street" placeholder="123 Main Street" required /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="city">City:</label></td>
                      <td><input type="text" id="city" name="city" placeholder="City" required /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="state">State:</label></td>
                      <td><input type="text" id="state" name="state" placeholder="State" required /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="postalCode">Postal/ZIP Code:</label></td>
                      <td><input type="text" id="postalCode" name="postalCode" placeholder="10001" required /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="country">Country:</label></td>
                      <td><input type="text" id="country" name="country" placeholder="Country" required /></td>
                    </tr>
                    <tr>
                        <td className="add-staff-form-cell">Department</td>
                        <td className="add-staff-form-cell">
                            <select
                             className="input-field"
                            >
                                <option>Pediatrics</option>
                                <option>Orthopedics</option>
                                <option>Cardiology</option>
                                <option>Gynecology</option>
                                <option>Emergency</option>
                                <option>Urology</option>
                                <option>Gastroenterology</option>
                                <option>Gastroenterology</option>
                                <option>Pathology</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        <button type="submit">Submit</button>
                      </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default AddStaff;