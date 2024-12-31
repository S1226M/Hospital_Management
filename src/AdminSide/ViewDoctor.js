import React, { useEffect, useState } from "react";

function ViewDoctor() {
    const [data, setData] = useState([]);
    const apiurl = 'http://localhost:6000/doctor';

    useEffect(() => {
        fetch(apiurl)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);

    let i = 0;
    const formatDoctor = data.map((doctor) => (
        <tr key={doctor.email}>
            <td>{++i}</td>
            <td>{doctor.name}</td>
            <td>{doctor.specialization}</td>
            <td>{doctor.department}</td>
            <td>{doctor.email}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.experience}</td>
            <td>{doctor.availability}</td>
        </tr>
    ));

    return (
        <div className="doctorInfoContainer">
            <h2 className="doctorInfoHeading">Doctor Information</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Experience</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>{formatDoctor}</tbody>
            </table>
        </div>
    );
}

export default ViewDoctor;
