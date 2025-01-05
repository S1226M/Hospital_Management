import React from "react";
import { Link } from "react-router-dom"; // Use react-router for navigation
import './PatientSidePages.css';

function LayOutPatientSide() {

    return (
        <div className="layout-patient-side-container">
            {/* Header with Navigation Links */}
            <header className="patient-header">
                <h3><b>Welcome to the Patient Portal</b></h3>
                <nav className="patient-nav">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/medical-records">Medical_Records</Link></li>
                        <li><Link to="/my-appointments">My_Appointments</Link></li>
                        <li><Link to="/doctors">Consult_Doctors</Link></li>
                        <li><Link to="/appointments">Book_Appointment</Link></li>
                        <li><Link to="/health-tips">Health_Tips</Link></li>
                        <li><Link to="/emergency">Emergency_Contact</Link></li>
                        <li><Link to="/notifications">Notifications</Link></li>
                        <li><Link to="/logout">Log Out</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Content */}
            <main className="patient-content">
                <h2>Your Profile</h2>
                <p>Patient Information and Actions go here...</p>
            </main>

            {/* Footer */}
            <footer className="patient-footer">
                <p>&copy; 2024 Hospital Management System</p>
            </footer>
        </div>
    );
}

export default LayOutPatientSide;