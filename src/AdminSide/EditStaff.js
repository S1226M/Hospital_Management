import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStaff() {
    const { number } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const [staff, setStaff] = useState({
        id: "",
        fullname: "",
        number: "",
        gender: "",
        street: "",
        city: "",
        state: "",
        pin: "",
        country: "",
        department: "",
    });

    const apiUrl = 'http://localhost:5000/staff/' + number; // Use the correct variable name here

    // Fetch staff details by ID
    useEffect(() => {
        fetch(apiUrl) // Make sure to use `apiUrl` here
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch staff details");
                }
                return response.json();
            })
            .then((data) => setStaff(data))
            .catch((err) => {
                console.error(err);
                setError("Error fetching staff details");
            });
    }, [apiUrl]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStaff((prevStaff) => ({
            ...prevStaff,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(staff),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to update staff details");
            }
            navigate('/admin/viewStaff');
        })
        .then((data) => {
            console.log("Staff updated successfully:", data);
            alert("Staff details updated!");
        })
        .catch((err) => {
            console.error(err);
            alert("Error updating staff details");
        });

        const validDepartments = ["Pediatrics","Orthopedics","Cardiology","Emergency","Urology","Gastroenterology","Pathology"]
        if(!validDepartments.includes(staff.department)){
            alert("Invalid Department");
        }
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="staffDetailContainer">
            <h2 className="staffDetailHeading">Edit Staff Details</h2>
            <form className="staffEditForm" onSubmit={handleSubmit}>
                <table className="staffInfoTable">
                    <tbody>
                        <tr>
                            <td><label>ID:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="id"
                                    value={staff.id}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Full Name:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={staff.fullName}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Number:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="number"
                                    value={staff.number}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Gender:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="gender"
                                    value={staff.gender}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Street Address:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="street"
                                    value={staff.street}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>City:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="city"
                                    value={staff.city}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>State:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="state"
                                    value={staff.state}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Postal/ZIP Code:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="pin"
                                    value={staff.pin}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Country:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="country"
                                    value={staff.country}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Department:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="department"
                                    value={staff.department}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default EditStaff;