import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewDoctor() {
    const [data, setData] = useState([]);
    const apiurl ='http://localhost:6060/doctor';

    useEffect(() => {
        fetch(apiurl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => setData(res))
            .catch((error) => console.error("Error fetching doctor data:", error));
    }, []);

    let i = 0;
    const formatDoctor = data.map((doctor) => (
        <tr key={doctor._id || doctor.email}>
            <td>{++i}</td>
            <td>{doctor.name}</td>
            <td>{doctor.specialization}</td>
            <td>{doctor.department}</td>
            <td>{doctor.email}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.experience}</td>
            <td>{doctor.availability}</td>
            <td>
                <Link 
                  className="btn btn-info" 
                  style={{ marginRight: '20px' }} 
                //   to={'/'}
                >
                  Read More
                </Link>
                <Link 
                  className="btn btn-warning" 
                  style={{ marginRight: '20px' }} 
                //   to={'/'}
                >
                  Edit
                </Link>
                <button 
                  className="btn btn-danger" 
                //   onClick={() => handleDelete(patient.number)}
                >
                  Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <div className="doctorInfoContainer">
            <h2 className="doctorInfoHeading">Doctor Information</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Experience</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{formatDoctor}</tbody>
                </table>
        </div>
    );
}

export default ViewDoctor;
