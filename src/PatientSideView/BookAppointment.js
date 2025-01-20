import React from "react";
function BookAppointment(){
    return(
        <form className="book-appointment-form">
            <h2 className="book-appointment-form-title">BookAppointment</h2>
            <table>
                <tbody>
                    <tr>
                        <td className="book-appointment-form-cell">Name</td>
                        <td className="book-appointment-form-cell">
                            <input type="text" name="name" placeholder="Full Name"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="book-appointment-form-cell">Phone Number</td>
                        <td>
                            <input type="number" placeholder="Phone Number"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}
export default BookAppointment;