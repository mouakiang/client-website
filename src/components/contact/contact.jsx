import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"; 

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ak192eb",
        "template_77ijqtw",
        form.current,
        "MzHTyqIQe4gxWBy-y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully!");

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div className="contactPage">
        <div className="contactDetail">
            <h1 className="contactH1">Contact Us</h1>
            <p className="contactParag">Please fill out the form below and we will contact you as soon as possible.</p>
        </div>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" />
        </div>
        <div className="formGroup">
          <label htmlFor="user_number">Phone Number</label>
          <input type="tel" name="user_number" id="user_number" />
        </div>
        <div className="formGroup">
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea className="formMsg" name="message" id="message" />
        </div>
        <div className="formGroup">
          <input type="submit" value="Send" />
        </div>
      </form>
      {message && <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>{message}</div>}
    </div>
  );
}
