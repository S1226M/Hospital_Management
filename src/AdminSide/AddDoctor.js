import React, { useState } from "react";
import './AddDoctor.css';
import { useNavigate } from "react-router-dom";

function AddDoctor() {
    const [data, setData] = useState({
        name: "",
        specialization: "",
        department: "",
        email: "",
        phone: "",
        experience: "",
        availability: "",
        address: "",
        gender: "",
        qualification_degree: "",
        current_workplace: "",
        emergency_contact_name: "",
        emergency_contact: "",
        preferred_mode_of_communication: "",
        dob: "",
    });

    const apiUrl = 'http://localhost:6060/doctor'; // Backend API URL
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.json())
            .then((res) => {
                navigate("/admin/viewDoctor")
            })
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="addDoctor">
            <h2 className="addDoctorHeading">Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Doctor Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.name}
                        id="name"
                        name="name"
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="specialization">Specialization</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.specialization}
                        id="specialization"
                        name="specialization"
                        onChange={(e) => setData({ ...data, specialization: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.department}
                        id="department"
                        name="department"
                        onChange={(e) => {
                            setData({...data , department : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={data.email}
                        id="email"
                        name="email"
                        onChange={(e) => {
                            setData({...data, email : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="number"
                        className="form-control"
                        value={data.phone}
                        id="phone"
                        name="phone"
                        onChange={(e) => {
                            setData({...data, phone : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Experience</label>
                    <input
                        type="number"
                        className="form-control"
                        value={data.experience}
                        id="experience"
                        name="experience"
                        onChange={(e) => {
                            setData({...data , experience : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="availability">Availability</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.availability}
                        id="availability"
                        name="availability"
                        onChange={(e) => {
                            setData({...data , availability : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.address}
                        id="address"
                        name="address"
                        onChange={(e) => {
                            setData({...data , address : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ marginRight: "10px", fontWeight: "bold" }}>Gender:</label>
                  <div className="redioBtn">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={data.gender === "male"}
                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                        style={{ marginRight: "5px" }}
                      />
                      Male
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                        style={{ marginRight: "5px" }}
                      />
                      Female
                  </div>
                </div>
                <div className="form-group">
                    <label htmlFor="qualification">Qualification/Degree</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.qualification_degree}
                        id="qualification"
                        name="qualification_degree"
                        onChange={(e) => {
                            setData({...data , qualification_degree : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="workplace">Current Workplace</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.current_workplace}
                        id="workplace"
                        name="current_workplace"
                        onChange={(e) => {
                            setData({...data , current_workplace : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="emergency_contact_name">Emergency Contact Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.emergency_contact_name}
                        id="emergency_contact_name"
                        name="emergency_contact_name"
                        onChange={(e) => {
                            setData({...data , emergency_contact_name : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="emergency_contact">Emergency Contact Number</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.emergency_contact}
                        id="emergency_contact"
                        name="emergency_contact"
                        onChange={(e) => {
                            setData({...data , emergency_contact : e.target.value})
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="preferred_mode_of_communication">Preferred Mode of Communication</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.preferred_mode_of_communication}
                        id="preferred_mode_of_communication"
                        name="preferred_mode_of_communication"
                        onChange={(e) => {
                            setData({...data , preferred_mode_of_communication : e.target.value})
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        className="form-control"
                        value={data.dob}
                        id="dob"
                        name="dob"
                        onChange={(e) => setData({ ...data, dob: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddDoctor;
