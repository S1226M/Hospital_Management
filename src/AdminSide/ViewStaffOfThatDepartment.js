import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewStaffOfThatDepartment() {
  const { department } = useParams();
  const [staff, setStaff] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7000/staff/${department}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch staff data");
        }
        return res.json();
      })
      .then((data) => setStaff(Array.isArray() ? data : [data])) 
      .catch((err) => {
        console.error(err);
        setError("Error fetching staff details");
      });
  }, [department]);

  if (error) {
    return <p>{error}</p>;
  }

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
          {staff.map((staff) => (
            <tr key={staff.number}>
              <td>{staff.number || "N/A"}</td>
              <td>{staff.fullName || "N/A"}</td>
              <td>{staff.gender || "N/A"}</td>
              <td>{staff.street || "N/A"}</td>
              <td>{staff.city || "N/A"}</td>
              <td>{staff.state || "N/A"}</td>
              <td>{staff.pin || "N/A"}</td>
              <td>{staff.country || "N/A"}</td>
              <td>{staff.department || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewStaffOfThatDepartment;
