import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AdminManagement.css';

function ViewStaff() {
  const [data, setData] = useState([]);
  const apiurl = "http://localhost:5000/staff";

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (number) => {
    fetch(`http://localhost:5000/staff/${number}`, {
      method: "DELETE",
    })
      .then(() => {
        setData(data.filter((staff) => staff.number !== number));
      })
      .catch((error) => console.error("Error deleting staff:", error));
  };

  let i = 0;
  const formatStaff = data.map((staff) => (
    <tr key={staff.number}>
      <td>{++i}</td>
      <td>{staff.number}</td>
      <td>{staff.fullName}</td>
      <td>{staff.gender}</td>
      <td>
        <Link
          className="btn btn-info"
          style={{ marginRight: "20px" }}
          to={`/admin/viewStaffByNumber/${staff.number}`} // Navigate by 'number'
        >
          Read More
        </Link>

        <Link
          className="btn btn-warning"
          style={{ marginRight: "20px" }}
          to={`/admin/editStaff/${staff.number}`} // Navigate to edit page
        >
          Edit
        </Link>

        <button
          className="btn btn-danger"
          onClick={() => handleDelete(staff.number)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="staffInfoContainer">
      <h2 className="staffInfoHeading">Staff Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Number</th>
            <th>Staff Name</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{formatStaff}</tbody>
      </table>
    </div>
  );
}

export default ViewStaff;
