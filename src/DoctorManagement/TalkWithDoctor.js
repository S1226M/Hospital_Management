import React from "react";
import "./TalkWithDoctor.css";

function TalkWithDoctor() {
    console.log("TalkWithDoctor component is rendering");
    return (
      <form className="e-mail-doctor">
        <h2 className="e-mail-form-title">Send Mail to Doctor</h2>
        <input type="text" name="name" placeholder="Your Name"></input>
        <input type="email" name="email" placeholder="Your Email"></input>
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    );
}  

export default TalkWithDoctor;