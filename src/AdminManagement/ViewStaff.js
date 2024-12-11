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

  const handleDelete = (id) => {
    fetch("http://localhost:5000/staff/" + id, {
      method: "DELETE",
    })
    .then(() => {
      setData(data.filter((staff) => staff.id !== id));
    })
    .catch((error) => console.error("Error deleting staff:", error));
  };

  let i = 0;
  const formatStaff = data.map((staff) => (
    <tr key={staff.id}>
      <td>{++i}</td>
      <td>{staff.id}</td>
      <td>{staff.fullName}</td>
      <td>{staff.number}</td>
      <td>{staff.gender}</td>
      <td>
      <Link
        className="btn btn-info"
        style={{ marginRight: "20px" }}
        to={`/admin/viewStaffByNumber/${staff.number}`}
      >
      Read More
      </Link>
        <Link
          className="btn btn-warning"
          style={{ marginRight: "20px" }}
          to={"" + staff.id}
        >
          Edit
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(staff.id)}
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
            <th className="Fild">No.</th>
            <th className="Fild">Id</th>
            <th className="Fild">Staff Name</th>
            <th className="Fild">Number</th>
            <th className="Fild">Gender</th>
            <th className="Fild">Actions</th>
          </tr>
        </thead>
        <tbody>{formatStaff}</tbody>
      </table>
    </div>
  );
}

export default ViewStaff;
