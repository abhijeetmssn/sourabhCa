"use client";
import emailjs from '@emailjs/browser';
import { useRef, useState} from "react";
import React from "react";

const ContactForm3 = ({ handleShowToast }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formRef.current)
    emailjs.sendForm('service_1nujdsr', 'template_o7i9q4e', formRef.current, 'iXs5h9O9fY4tj1IE7')
      .then((result) => {
        handleShowToast("Message Sent!", false);
        console.log("yo")
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: ""
        });
      }, (error) => {
        handleShowToast("Problem Occured!", true);
      });
      //formRef.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="messages" />

      <div className="input-bg-group position-relative controls">
        {/* Name */}
        <div className="d-block">
          <div className="input-group-meta form-group mb-50">
            <label htmlFor="name" className="d-block">Name*</label>
            <input
                type="text"
                placeholder="Your Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required="required"
                data-error="Name is required."
              />
            <div className="help-block with-errors" />
          </div>
        </div>

        {/* Email */}
        <div className="d-block">
          <div className="input-group-meta form-group mb-60">
            <label htmlFor="email" className="d-block">Email*</label>
            <input
                type="email"
                placeholder="Email Address*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required="required"
                data-error="Valid email is required."
              />
            <div className="help-block with-errors" />
          </div>
        </div>

        {/* Message */}
        <div className="d-block">
          <div className="input-group-meta form-group">
            <label htmlFor="message" className="d-block">Message*</label>
            <textarea
                placeholder="Your message*"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required="required"
                data-error="Please,leave us a message."
              />
            <div className="help-block with-errors" />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn-one fw-500 w-100 fs-18 d-block mt-45">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm3;