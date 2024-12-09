import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewStaffById() {
  const { id } = useParams(); // Extract `id` from the URL
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiurl = `http://localhost:5000/staff/${id}`;

    fetch(apiurl)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch staff details');
        }
        return res.json();
      })
      .then((data) => {
        setStaff(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading staff details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
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
            <th>ID</th>
            <td>{staff.id}</td>
          </tr>
          <tr>
            <th>Full Name</th>
            <td>{staff.fullName}</td>
          </tr>
          <tr>
            <th>Number</th>
            <td>{staff.number}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{staff.gender}</td>
          </tr>
          <tr>
            <th>Street</th>
            <td>{staff.street}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{staff.city}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>{staff.state}</td>
          </tr>
          <tr>
            <th>Pin</th>
            <td>{staff.pin}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{staff.country}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{staff.department}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewStaffById;