import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../StaffSide/PatientInfo/PatientInfo.css'

function AllPatientInformation() {
  const [data, setData] = useState([]); // Fixed typo: 'onst' to 'const'
  const apiurl = 'http://localhost:4000/patient';

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (number) => {
    fetch('http://localhost:4000/patient/' + number, {
      method: 'DELETE',
    }).then(() => {
      setData(data.filter((patient) => patient.number !== number));
    });
  };

  let i = 0;
  const formattedPatients = data.map((patient) => (
    <tr key={patient.number}>
      <td>{++i}</td>
      <td>{patient.fullName || patient.Name}</td>
      <td>{patient.number || patient.Number}</td>
      <td>{patient.roomNumber || patient.ROOM_NO}</td>
      <td>
        <Link
          className="btn-read"
          style={{marginRight : '50px' , marginLeft : '20px'}}
          to={'/layout/patient/' + patient.number}
        >
          Read More
        </Link>
        <Link
          className="btn-edit"
          to={'/layout/patient/edit/' + patient.number}
        >
          Edit
        </Link>
        <Link
          className="btn-delete"
          onClick={() => handleDelete(patient.number)}
        >
          Delete
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className="patientInfoContainer">
      <h2 className="patientInfoHeading">Patient Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="Fild">No.</th>
            <th className="Fild">Patient Name</th>
            <th className="Fild">Number</th>
            <th className="Fild">Room</th>
            <th style={{width : '400px'}} className="Fild">Actions</th>
          </tr>
        </thead>
        <tbody>{formattedPatients}</tbody>
      </table>
    </div>
  );
}

export default AllPatientInformation;
