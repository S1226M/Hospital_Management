import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PatientInfo.css';

function PatientInfoById() {
  const { number } = useParams();
  const [patient, setPatient] = useState(null);
  const apiurl = `http://localhost:4000/patient/${number}`;

  useEffect(() => {
    fetch(apiurl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch patient data');
        }
      })
      .then((data) => setPatient(data))
      .catch((error) => console.error('Error:', error));
  }, [apiurl]);

  if (!patient) {
    return <div>Loading patient details...</div>;
  }

  return (
    <div className="patientDetailContainer">
      <h2 className="patientDetailHeading">Patient Detail</h2>
      <table className="patientDetailTable">
        <tbody>
          <tr>
            <th>ID Type</th>
            <td>{patient.idType || 'N/A'}</td>
          </tr>
          <tr>
            <th>Number</th>
            <td>{patient.number}</td>
          </tr>
          <tr>
            <th>Full Name</th>
            <td>{patient.fullName || 'N/A'}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{patient.gender || 'N/A'}</td>
          </tr>
          <tr>
            <th>Symptoms</th>
            <td>{patient.symptoms || 'N/A'}</td>
          </tr>
          <tr>
            <th>Room Number</th>
            <td>{patient.roomNumber || 'N/A'}</td>
          </tr>
          <tr>
            <th>Deposit</th>
            <td>{patient.deposit || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PatientInfoById;