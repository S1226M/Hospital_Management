import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import './SignIn&SignUp.css'

function ForgotPassword() {
    return (
      <>
        <div className="outer-box">
          <form>
            <div className="forgotPassword-container">
              <div className="icon"><FaCircleExclamation /></div>
              <p className="msg-forgotPassword">
                Enter your email and we'll send you a code and enter the code to reset your password
              </p>
              <div className="email">
                <IoMail />
                <input type="email" placeholder="Enter your email" />
              </div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </>
    );
  }
  
export default ForgotPassword;