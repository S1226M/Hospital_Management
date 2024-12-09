import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AdminManagement.css';


function ViewStaff() {
  const [data, setData] = useState([]);
  const apiurl = "http://localhost:5000/staff";

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (number) => {
    fetch("http://localhost:5000/staff/" + number, {
      method: "DELETE",
    }).then(() => {
      setData(data.filter((staff) => staff.number !== number));
    });
  };

  let i = 0;
  const formatStaff = data.map((staff) => (
    <tr key={staff.number}>
      <td>{++i}</td>
      <td>{staff.id}</td>
      <td>{staff.fullName}</td>
      <td>{staff.number}</td>
      <td>{staff.gender}</td>
      {/* <td>{staff.street}</td>
      <td>{staff.city}</td>
      <td>{staff.state}</td>
      <td>{staff.pin}</td>
      <td>{staff.country}</td>
      <td>{staff.department}</td> */}
      <td>
        <Link
          className="btn btn-info"
          style={{ marginRight: "20px" }}
          to={"" + staff.number}
          // /admin/viewStaff
        >
          Read More
        </Link>
        <Link
          className="btn btn-warning"
          style={{ marginRight: "20px" }}
          to={"" + staff.number}
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
            <th className="Fild">No.</th>
            <th className="Fild">Id</th>
            <th className="Fild">Staff Name</th>
            <th className="Fild">Number</th>
            <th className="Fild">Gender</th>
            <th className="Fild">Actions</th>
            {/* <th className="Fild">Street</th>
            <th className="Fild">City</th>
            <th className="Fild">State</th>
            <th className="Fild">Pin</th>
            <th className="Fild">Country</th>
            <th className="Fild">Department</th>
            <th className="Fild">Actions</th> */}
          </tr>
        </thead>
        <tbody>{formatStaff}</tbody>
      </table>
    </div>
  );
}

export default ViewStaff;
