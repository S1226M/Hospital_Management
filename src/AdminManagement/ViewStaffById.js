import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewStaffByNumber() {
  const { number } = useParams(); // Fetch number from the URL
  const [staff, setStaff] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Correct API URL: /staff/:number
    const apiurl = `http://localhost:5000/staff/${number}`;

    fetch(apiurl)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch staff data');
        }
        return res.json();
      })
      .then((data) => setStaff(data))
      .catch((err) => {
        console.error(err);
        setError('Error fetching staff details');
        setStaff(null);
      });
  }, [number]); // Re-run the effect if the number changes

  if (error) {
    return <p>{error}</p>;
  }

  if (!staff) {
    return <p>No staff details found.</p>;
  }

  return (
    <div className="staffDetailContainer">
      <h2 className="staffDetailHeading">Staff Detail</h2>
      <table className="staffDetailTable">
        <tbody>
          <tr>
            <th>Number</th>
            <td>{staff.number || 'N/A'}</td>
          </tr>
          <tr>
            <th>Full Name</th>
            <td>{staff.fullName || 'N/A'}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{staff.gender || 'N/A'}</td>
          </tr>
          <tr>
            <th>Street</th>
            <td>{staff.street || 'N/A'}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{staff.city || 'N/A'}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>{staff.state || 'N/A'}</td>
          </tr>
          <tr>
            <th>Pin</th>
            <td>{staff.pin || 'N/A'}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{staff.country || 'N/A'}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{staff.department || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewStaffByNumber;
