import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ViewStaff.css';

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
        <div className="action-buttons">
          <Link
            className="btn-read"
            style={{ marginRight: '50px' , marginLeft : '20px'}}
            to={`/admin/viewStaffByNumber/${staff.number}`}
          >
            Read More
          </Link>

          <Link
            className="btn-edit"
            style={{ marginRight: '20px' , float: 'left'}}
            to={`/admin/editStaff/${staff.number}`}
          >
            Edit
          </Link>
          <Link
            className="btn-delete"
            style={{float: 'left'}}
            onClick={() => handleDelete(staff.number)}
          >
            Delete
          </Link>
        </div>
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
            <th style={{width : '500px'}}>Actions</th>
          </tr>
        </thead>
        <tbody>{formatStaff}</tbody>
      </table>
    </div>
  );
}

export default ViewStaff;
