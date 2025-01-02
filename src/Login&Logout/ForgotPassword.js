import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

function ForgotPassword(){
    return(
        <>
            <h1>ForgotPassword</h1>
            <div className="forgotPassword-container">
                <div className="icon"><FaCircleExclamation /></div>
                <p className="msg-forgotPassword">Enter your email and we'll send you a code and enter code to reset your password</p>
                <div className="email">
                    <IoMail />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <button>Submit</button>
            </div>
        </>
    )
}

export default ForgotPassword;