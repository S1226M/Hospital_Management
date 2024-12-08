import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStaff(){
  const [data , setData] = useState({
    id : "Adhar Card",
    fullName : "",
    number : "",
    gender : "male",
    street : "",
    city : "",
    state : "",
    pin : "",
    country : "India",
    department : ""
  });

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:5000/staff";

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((result) => {
      navigate("/admin/viewStaff");
    })
    .catch((error) => console.error("Error:", error));
  }
    return(
        <form className="add-staff-form" onSubmit={handleSubmit}>
            <h2 className="add-staff-form-title">Add staff Information</h2>
            <table>
                <tbody>
                    <tr>
                        <td className="add-staff-form-cell">ID</td>
                        <td className="add-staff-form-cell">
                            <select
                             className="input-field"
                             value={data.idType}
                             onChange={(e) => setData({ ...data, id: e.target.value })}
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
                            value={data.fullName}
                            onChange={(e) => setData({ ...data, fullName: e.target.value })}
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
                            value={data.number}
                            onChange={(e) => setData({ ...data, number: e.target.value })}
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
                                checked={data.gender === "male"}
                                onChange={(e) => setData({ ...data, gender: e.target.value })}
                              />
                              Male
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="Gender"
                                value="female"
                                checked={data.gender === "female"}
                                onChange={(e) => setData({ ...data, idType: e.target.value })}
                              />
                              Female
                            </label>
                          </div>
                        </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="street">Street Address:</label></td>
                      <td><input 
                            type="text" id="street" name="street" placeholder="123 Main Street" required 
                            value={data.street}
                            onChange={(e) => setData({ ...data, street: e.target.value })}
                          />
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="city">City:</label></td>
                      <td><input 
                            type="text" id="city" name="city" placeholder="City" required 
                            value={data.city}
                            onChange={(e) => setData({ ...data, city: e.target.value })}  
                          />
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="state">State:</label></td>
                      <td><input 
                            type="text" id="state" name="state" placeholder="State" required 
                            value={data.state}
                            onChange={(e) => setData({ ...data, state: e.target.value })}
                          />
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="postalCode">Postal/ZIP Code:</label></td>
                      <td><input 
                            type="text" id="postalCode" name="postalCode" placeholder="10001" required 
                            value={data.pin}
                            onChange={(e) => setData({ ...data, pin: e.target.value })}
                          />
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="country">Country:</label></td>
                      <td><input 
                            type="text" id="country" name="country" placeholder="Country" required 
                            value={data.country}
                            onChange={(e) => setData({ ...data, country: e.target.value })}
                          />
                      </td>
                    </tr>
                    <tr>
                        <td className="add-staff-form-cell">Department</td>
                        <td className="add-staff-form-cell">
                            <select
                             className="input-field"
                             value={data.department}
                             onChange={(e) => setData({ ...data, department: e.target.value })}
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