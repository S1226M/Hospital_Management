import React from 'react';
import './Room.css'; // Import the CSS file

function Room() {
  return (
    <div className="roomContainer">
      <h2 className="roomHeading">Room Information</h2>

      <table className="roomTable">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Availability</th>
            <th>Price</th>
            <th>Bed Type</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tableRowLight">
            <td>101</td>
            <td>Available</td>
            <td>$300</td>
            <td>Single</td>
          </tr>
          <tr className="tableRowDark">
            <td>102</td>
            <td>Occupied</td>
            <td>$150</td>
            <td>Double</td>
          </tr>
          {/* More rows can be added here */}
        </tbody>
      </table>

      <div className="buttonContainer">
        <button
          type="reset"
          className="backButton"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Room;
