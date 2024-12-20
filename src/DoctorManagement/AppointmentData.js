import React from "react";

function AppointmentData(){
    return(
        <div className="appointmentDataContainer">
            <h2 className="appointmentDataHeading">AppointmentData</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Full Name</th>
                        <th>Reason For Appointment</th>
                        <th>Doctor Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>MedicalHistory</th>
                        <th>Insurance Details</th>
                    </tr>
                </thead>
                {/* table body */}
            </table>
        </div>
    )
}

export default AppointmentData;