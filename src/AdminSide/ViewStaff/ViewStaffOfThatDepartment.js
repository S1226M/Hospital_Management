import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewStaffOfThatDepartment() {
  const { department } = useParams();
  const [staff, setStaff] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Log the department parameter to verify it's being passed correctly
    console.log("Fetching staff for department:", department);

    fetch(`http://localhost:5000/staff/department/${department}`)
      .then((res) => {
        if (!res.ok) {
          // If status code is not OK, throw an error
          throw new Error("Failed to fetch staff data");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setStaff(data); // If data is an array, set it to the state
        } else {
          setStaff([data]); // If it's a single object, wrap it in an array
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching staff details");
      });
  }, [department]);

  // Error handling if there's an issue with fetching
  if (error) {
    return <p>{error}</p>;
  }

  // If there are no staff records for the department
  if (!staff.length) {
    return <p>No staff details found for this department.</p>;
  }

  return (
    <div className="staffDetailContainer">
      <h2 className="staffDetailHeading">Staff Detail</h2>
      <table className="staffDetailTable">
        <thead>
          <tr>
            <th>Number</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Pin</th>
            <th>Country</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((staffMember) => (
            <tr key={staffMember.number}>
              <td>{staffMember.number || "N/A"}</td>
              <td>{staffMember.fullName || "N/A"}</td>
              <td>{staffMember.gender || "N/A"}</td>
              <td>{staffMember.street || "N/A"}</td>
              <td>{staffMember.city || "N/A"}</td>
              <td>{staffMember.state || "N/A"}</td>
              <td>{staffMember.pin || "N/A"}</td>
              <td>{staffMember.country || "N/A"}</td>
              <td>{staffMember.department || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewStaffOfThatDepartment;