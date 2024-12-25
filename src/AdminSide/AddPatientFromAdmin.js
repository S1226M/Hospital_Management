import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StaffSide/AddPatient.css";

function AddPatientFromAdmin(){
    const [data, setData] = useState({
        idType: "Adhar Card",
        number: "",
        fullName: "",
        gender: "male",
        symptoms: "",
        roomNumber: "101",
        deposit: "",
      });
    
      const [availableRooms,setAvailableRooms] = useState([]);
      const navigate = useNavigate();
    
      useEffect(() => {
        //get available room from the database and set it to the state
        const fetchAvailableRooms = async () => {
          try{
            const response = await fetch("http://localhost:4000/available-rooms");
            const rooms = await response.json();
            setAvailableRooms(rooms);
            setData((data) => ({ ...data, roomNumber: "" })); /////////////////////////////////i went to set data not empty but as per user choice like .taregt.val
          } 
          catch (error) {
            console.error("Error fetching available rooms:", error);
          }
        }
        fetchAvailableRooms();
      })
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const apiUrl = "http://localhost:4000/patient";
    
        fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.json())
        .then((result) => {
          navigate("/admin/allPatientInformation");
        })
        .catch((error) => console.error("Error:", error));
      };
    
      return (
        <form className="add-patient-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Add Patient Information</h2>
          <table className="form-table">
            <tbody>
              <tr>
                <td className="form-table-cell">ID Type</td>
                <td className="form-table-cell">
                  <select
                    className="input-field"
                    value={data.idType}
                    onChange={(e) => setData({ ...data, idType: e.target.value })}
                  >
                    <option>Adhar Card</option>
                    <option>Driving License</option>
                    <option>Passport</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="form-table-cell">Full Name</td>
                <td className="form-table-cell">
                  <input
                    onChange={(e) => setData({ ...data, fullName: e.target.value })}
                    type="text"
                    value={data.fullName}
                    required
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-table-cell">Phone Number</td>
                <td className="form-table-cell">
                  <input
                    onChange={(e) => setData({ ...data, number: e.target.value })}
                    type="text"
                    value={data.number}
                    required
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-table-cell">Gender</td>
                <td className="form-table-cell">
                  <div className="gender-options">
                    <label>
                      <input
                        type="radio"
                        name="Gender"
                        value="male"
                        checked={data.gender === "male"}
                        onChange={(e) =>
                          setData({ ...data, gender: e.target.value })
                        }
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="Gender"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={(e) =>
                          setData({ ...data, gender: e.target.value })
                        }
                      />
                      Female
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="form-table-cell">Patient Disease & Symptoms</td>
                <td className="form-table-cell">
                  <input
                    onChange={(e) =>
                      setData({ ...data, symptoms: e.target.value })
                    }
                    type="text"
                    value={data.symptoms}
                    required
                    className="input-field"
                  />
                </td>
              </tr>
              
              <tr>
                <td className="form-table-cell">Allocated Room Number</td>
                <td className="form-table-cell">
                  <select
                    className="input-field"
                    value={data.roomNumber}
                    onChange={(e) =>
                      setData({ ...data, roomNumber: e.target.value })
                    }
                  >
                    {availableRooms.length > 0 ? 
                      (availableRooms.map((room) => (<option key={room} value={room}>{room}</option>))) : 
                      (<option disabled>No rooms available</option>)
                    }
                  </select>
                </td>
              </tr>
              
              <tr>
                <td className="form-table-cell">Deposit</td>
                <td className="form-table-cell">
                  <input
                    onChange={(e) => setData({ ...data, deposit: e.target.value })}
                    type="number"
                    value={data.deposit}
                    required
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="form-buttons">
                  <button
                    type="submit"
                    className="add-patient-button add-patient-submit-btn"
                  >
                    Add Patient
                  </button>
                  <button
                    type="reset"
                    className="add-patient-button add-patient-reset-btn"
                    onClick={() =>
                      setData({
                        idType: "Adhar Card",
                        number: "",
                        fullName: "",
                        gender: "male",
                        symptoms: "",
                        roomNumber: "101",
                        deposit: "",
                      })
                    }
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      );
}

export default AddPatientFromAdmin;
