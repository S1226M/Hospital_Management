import React, { useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import './SignIn&SignUp.css';

// Function to handle the email sending
async function sendMail(email) {
  try {
    const response = await fetch("http://localhost:5000/send-reset-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert("Password reset email sent.");
    } else {
      alert("Failed to send email. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error sending email. Please try again.");
  }
}

function ForgotPassword() {
  const [email, setEmail] = useState(""); // State for email input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (email) {
      sendMail(email); // Call the sendMail function with the entered email
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="outer-box">
      <form onSubmit={handleSubmit}>
        <div className="forgotPassword-container">
          <div className="icon">
            <FaCircleExclamation />
          </div>
          <p className="msg-forgotPassword">
            Enter your email and we'll send you a code to reset your password.
          </p>
          <div className="email">
            <IoMail />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set the email state
              required
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;