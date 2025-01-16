import React, { useEffect, useState } from "react";

function ViewDoctor() {
    const [data, setData] = useState([]);
    const apiurl = process.env.REACT_APP_API_URL || 'http://localhost:6060/doctor';

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
            <td>{doctor.address}</td>
            <td>{doctor.gender}</td>
            <td>{doctor.qualification_degree}</td>
            <td>{doctor.current_workplace}</td>
            <td>{doctor.emergency_contact_name}</td>
            <td>{doctor.emergency_contact}</td>
            <td>{doctor.preferred_mode_of_communication}</td>
            <td>{doctor.dob}</td>
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
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Qualification/Degree</th>
                            <th>Current Workplace/Hospital Name</th>
                            <th>Emergency Contact Name</th>
                            <th>Emergency Contact Number</th>
                            <th>Preferred Mode of Communication</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>{formatDoctor}</tbody>
                </table>
        </div>
    );
}

export default ViewDoctor;
