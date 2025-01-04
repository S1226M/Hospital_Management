import React, { useEffect, useState } from "react";
import './AddDoctor.css'
import { useNavigate } from "react-router-dom";

function AddDoctor(){
    const [data ,setData] = useState({
        name : "",
        specialization : "",
        department : "",
        email : "",
        phone : "",
        experience : "",
        availability : "",
        address : "",
        gender : "",
        qualification_degree : "",
        current_workplace : "",
        emergency_contact_name : "",
        emergency_contact : "",
        preferred_mode_of_communication : "",
        dob : ""
    })

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = "http://localhost:6000/doctor"

        useEffect(() => {
            fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.json())
            .then((res) => {
                navigate('/')
            })
        })
    }

    return(
        <div className="addDoctor">
            <h2 className="addDoctorHeading">Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Doctor Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={data.name} 
                        id="name" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="specialization">Specialization</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={data.specialization} 
                        id="specialization" name="specialization"/>
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={data.department}
                        id="department" name="department"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        className="form-control"
                        value={data.email} 
                        id="email" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="number" 
                        className="form-control"
                        value={data.phone} 
                        id="phone" name="phone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Experience</label>
                    <input 
                        type="number" 
                        className="form-control"
                        value={data.experience} 
                        id="experience" name="experience"/>
                </div>
                <div className="form-group">
                    <label htmlFor="availability">Availability</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={data.availability} 
                        id="availability" name="availability"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={data.address} 
                        id="address" name="address"/>
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value={data.gender}
                        >
                            Male
                        </input>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value={data.gender}
                        >
                            Female
                        </input>
                    </label>
                </div>
                
                <div className="form-group">
                    <label htmlFor="qualification">Qualification/Degree</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={data.qualification_degree} 
                        id="qualification" name="qualification"/>
                </div>
                <div className="form-group">
                    <label htmlFor="workplace">Current Workplace/Hospital Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={data.current_workplace}
                        id="workplace" name="workplace"/>
                </div>
                <div className="form-group">
                    <label htmlFor="emergencycontact">Emergency Contact Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={data.emergency_contact_name}
                        id="emergencycontact" name="emergencycontact"/>
                </div>
                <div className="form-group">
                    <label htmlFor="emergencycontactnumber">Emergency Contact Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={data.emergency_contact_number}
                        id="emergencycontactnumber" name="emergencycontactnumber"/>
                </div>
                <div className="form-group">
                    <label htmlFor="communication">Preferred Mode of Communication</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={data.preferred_mode_of_communication}
                        id="communication" name="communication"/>
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={data.dob}
                        id="dob" name="dob"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddDoctor;